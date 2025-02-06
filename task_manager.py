import json
from datetime import datetime
from typing import List, Optional
from dataclasses import dataclass
from enum import Enum
import uuid

class TaskStatus(Enum):
    PENDING = "pending"
    COMPLETED = "completed"

class TaskCategory(Enum):
    PERSONAL = "personal"
    WORK = "work"
    STUDY = "study"
    OTHER = "other"

@dataclass
class TaskHistory:
    timestamp: datetime
    action: str
    details: str

@dataclass
class Task:
    id: str
    title: str
    description: str
    status: TaskStatus
    due_date: datetime
    category: TaskCategory
    version: int
    created_at: datetime
    history: List[TaskHistory]
    
    def __init__(self, title: str, description: str, due_date: datetime, category: TaskCategory = TaskCategory.OTHER):
        self.id = str(uuid.uuid4())
        self.title = title
        self.description = description
        self.status = TaskStatus.PENDING
        self.due_date = due_date
        self.category = category
        self.version = 1
        self.created_at = datetime.now()
        self.history = [TaskHistory(self.created_at, "CREATED", "Task created")]

    def update_version(self, action: str, details: str):
        self.version += 1
        self.history.append(TaskHistory(datetime.now(), action, details))

class TaskManager:
    def __init__(self, storage_file: str = "tasks.json"):
        self.tasks: List[Task] = []
        self.storage_file = storage_file
        self.load_tasks()
    
    def save_tasks(self):
        with open(self.storage_file, 'w') as f:
            tasks_data = []
            for task in self.tasks:
                history_data = [{"timestamp": h.timestamp.isoformat(), 
                               "action": h.action, 
                               "details": h.details} for h in task.history]
                task_data = {
                    "id": task.id,
                    "title": task.title,
                    "description": task.description,
                    "status": task.status.value,
                    "due_date": task.due_date.isoformat(),
                    "category": task.category.value,
                    "version": task.version,
                    "created_at": task.created_at.isoformat(),
                    "history": history_data
                }
                tasks_data.append(task_data)
            json.dump(tasks_data, f)

    def load_tasks(self):
        try:
            with open(self.storage_file, 'r') as f:
                tasks_data = json.load(f)
                for task_data in tasks_data:
                    task = Task(
                        task_data["title"],
                        task_data["description"],
                        datetime.fromisoformat(task_data["due_date"]),
                        TaskCategory(task_data["category"])
                    )
                    task.id = task_data["id"]
                    task.status = TaskStatus(task_data["status"])
                    task.version = task_data["version"]
                    task.created_at = datetime.fromisoformat(task_data["created_at"])
                    task.history = [
                        TaskHistory(
                            datetime.fromisoformat(h["timestamp"]),
                            h["action"],
                            h["details"]
                        ) for h in task_data["history"]
                    ]
                    self.tasks.append(task)
        except FileNotFoundError:
            self.tasks = []

    def add_task(self, title: str, description: str, due_date: datetime, category: TaskCategory = TaskCategory.OTHER) -> Task:
        if not title or not description:
            raise ValueError("Title and description are required")
        task = Task(title, description, due_date, category)
        self.tasks.append(task)
        self.save_tasks()
        return task
    
    def remove_task(self, task_id: str) -> bool:
        task = self.find_task(task_id)
        if task:
            self.tasks.remove(task)
            self.save_tasks()
            return True
        return False
    
    def complete_task(self, task_id: str) -> bool:
        task = self.find_task(task_id)
        if task:
            task.status = TaskStatus.COMPLETED
            task.update_version("COMPLETED", "Task marked as completed")
            self.save_tasks()
            return True
        return False
    
    def find_task(self, task_id: str) -> Optional[Task]:
        return next((task for task in self.tasks if task.id == task_id), None)
    
    def get_all_tasks(self) -> List[Task]:
        return self.tasks.copy()
    
    def get_tasks_by_status(self, status: TaskStatus) -> List[Task]:
        return [task for task in self.tasks if task.status == status]

    def update_task(self, task_id: str, title: str = None, description: str = None, 
                   due_date: datetime = None, category: TaskCategory = None) -> bool:
        task = self.find_task(task_id)
        if task:
            changes = []
            if title and title != task.title:
                task.title = title
                changes.append("title")
            if description and description != task.description:
                task.description = description
                changes.append("description")
            if due_date and due_date != task.due_date:
                task.due_date = due_date
                changes.append("due date")
            if category and category != task.category:
                task.category = category
                changes.append("category")
            
            if changes:
                task.update_version("UPDATED", f"Changed: {', '.join(changes)}")
                self.save_tasks()
                return True
        return False

    def get_task_history(self, task_id: str) -> Optional[List[TaskHistory]]:
        task = self.find_task(task_id)
        return task.history if task else None

    def get_tasks_by_category(self, category: TaskCategory) -> List[Task]:
        return [task for task in self.tasks if task.category == category]

def main():
    manager = TaskManager()
    
    while True:
        print("\n1. Add Task")
        print("2. Complete Task")
        print("3. Remove Task")
        print("4. List All Tasks")
        print("5. List Pending Tasks")
        print("6. Update Task")
        print("7. View Task History")
        print("8. List Tasks by Category")
        print("9. Exit")
        
        choice = input("Choose an option: ")
        
        if choice == "1":
            title = input("Enter task title: ")
            desc = input("Enter task description: ")
            date_str = input("Enter due date (YYYY-MM-DD): ")
            category_str = input("Enter task category (personal, work, study, other): ").upper()
            try:
                due_date = datetime.strptime(date_str, "%Y-%m-%d")
                category = TaskCategory[category_str] if category_str in TaskCategory.__members__ else TaskCategory.OTHER
                task = manager.add_task(title, desc, due_date, category)
                print(f"Task created with ID: {task.id}")
            except ValueError as e:
                print(f"Error: {e}")
                
        elif choice == "2":
            task_id = input("Enter task ID: ")
            if manager.complete_task(task_id):
                print("Task marked as completed")
            else:
                print("Task not found")
                
        elif choice == "3":
            task_id = input("Enter task ID: ")
            if manager.remove_task(task_id):
                print("Task removed")
            else:
                print("Task not found")
                
        elif choice == "4":
            tasks = manager.get_all_tasks()
            for task in tasks:
                print(f"\nID: {task.id}")
                print(f"Title: {task.title}")
                print(f"Status: {task.status.value}")
                print(f"Due: {task.due_date.date()}")
                print(f"Category: {task.category.value}")
                print(f"Version: {task.version}")
                print(f"Created At: {task.created_at}")
                
        elif choice == "5":
            tasks = manager.get_tasks_by_status(TaskStatus.PENDING)
            for task in tasks:
                print(f"\nID: {task.id}")
                print(f"Title: {task.title}")
                print(f"Due: {task.due_date.date()}")
                
        elif choice == "6":
            task_id = input("Enter task ID: ")
            title = input("Enter new task title (leave blank to keep current): ")
            desc = input("Enter new task description (leave blank to keep current): ")
            date_str = input("Enter new due date (YYYY-MM-DD, leave blank to keep current): ")
            category_str = input("Enter new task category (personal, work, study, other, leave blank to keep current): ").upper()
            try:
                due_date = datetime.strptime(date_str, "%Y-%m-%d") if date_str else None
                category = TaskCategory[category_str] if category_str in TaskCategory.__members__ else None
                if manager.update_task(task_id, title, desc, due_date, category):
                    print("Task updated")
                else:
                    print("Task not found or no changes made")
            except ValueError as e:
                print(f"Error: {e}")

        elif choice == "7":
            task_id = input("Enter task ID: ")
            history = manager.get_task_history(task_id)
            if history:
                for record in history:
                    print(f"\nTimestamp: {record.timestamp}")
                    print(f"Action: {record.action}")
                    print(f"Details: {record.details}")
            else:
                print("Task not found or no history available")

        elif choice == "8":
            category_str = input("Enter task category (personal, work, study, other): ").upper()
            category = TaskCategory[category_str] if category_str in TaskCategory.__members__ else TaskCategory.OTHER
            tasks = manager.get_tasks_by_category(category)
            for task in tasks:
                print(f"\nID: {task.id}")
                print(f"Title: {task.title}")
                print(f"Status: {task.status.value}")
                print(f"Due: {task.due_date.date()}")
                print(f"Category: {task.category.value}")
                print(f"Version: {task.version}")
                print(f"Created At: {task.created_at}")

        elif choice == "9":
            break
        
        else:
            print("Invalid option")

if __name__ == "__main__":
    main()
