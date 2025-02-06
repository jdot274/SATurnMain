import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface ScheduleCalendarLocationProps {
  today?: Date;
}

const ScheduleCalendarLocation: React.FC<ScheduleCalendarLocationProps> = ({ today = new Date() }) => {
  const navigate = useNavigate();

  // Calendar data
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDay };
  };

  const { daysInMonth, firstDay } = getDaysInMonth(today);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);
  const currentDay = today.getDate();

  return (
    <div className="grid grid-cols-3 gap-8">
      {/* Left Calendar Card */}
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6
                   hover:bg-white/10 transition-all duration-300 cursor-pointer group">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Study Schedule</h3>
            <p className="text-sm text-white/60">Today's Plan</p>
          </div>
          <Calendar className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
        </div>
        <div className="space-y-3">
          <div className="p-2 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm text-white/90">Math Practice - 2 hours</p>
          </div>
          <div className="p-2 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm text-white/90">Reading Comprehension - 1.5 hours</p>
          </div>
          <div className="p-2 bg-white/5 rounded-lg border border-white/10">
            <p className="text-sm text-white/90">Vocabulary Review - 30 min</p>
          </div>
        </div>
      </div>

      {/* Center Calendar */}
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold">
            {today.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h3>
        </div>
        <div className="grid grid-cols-7 gap-2 text-sm">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="text-center text-white/40">{day}</div>
          ))}
          {blanks.map(blank => (
            <div key={`blank-${blank}`} />
          ))}
          {days.map(day => (
            <div
              key={day}
              className={`text-center p-1 rounded-full ${
                day === currentDay ? 'bg-blue-500 text-white' : 
                day < currentDay ? 'text-white/40' : 'hover:bg-white/10'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Right Calendar Card */}
      <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-6
                   hover:bg-white/10 transition-all duration-300 group">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Test Location</h3>
            <p className="text-sm text-white/60">
              {today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
        <div className="relative h-[120px] mb-4 overflow-hidden rounded-lg border border-white/10">
          <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Central+High+School&zoom=15&size=400x200&key=YOUR_API_KEY')] 
                      bg-cover bg-center opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="space-y-2">
          <div className="text-white/90">Central High School</div>
          <div className="text-sm text-white/60">123 Education Ave, City, State</div>
          <div className="flex items-center gap-2 mt-4">
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm border border-green-500/30">
              Registered
            </span>
            <button 
              onClick={() => navigate('/register-exam')}
              className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-sm border border-white/10
                       hover:bg-white/10 transition-colors"
            >
              Change Location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCalendarLocation;