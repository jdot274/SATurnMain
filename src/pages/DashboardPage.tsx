import React from 'react';
import { Bell, BookOpen, Trophy, TrendingUp, Calendar, Clock } from 'lucide-react';
import SATurnLogo from '../components/SATurnLogo';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <SATurnLogo />
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600" />
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-sm font-medium text-indigo-600">JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Joey!</h1>
          <p className="text-gray-600 mt-2">Your test is in 45 days. Stay on track!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Practice Score</h3>
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-indigo-600 mt-2">1420</p>
            <p className="text-sm text-gray-500 mt-1">+50 points this week</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Study Streak</h3>
              <Trophy className="h-6 w-6 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-indigo-600 mt-2">12 days</p>
            <p className="text-sm text-gray-500 mt-1">Keep it going!</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Questions Done</h3>
              <BookOpen className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-indigo-600 mt-2">847</p>
            <p className="text-sm text-gray-500 mt-1">Top 10% of users</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Continue Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">Practice Test #4</h3>
                <p className="text-sm text-gray-500">Resume where you left off</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="bg-green-100 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">Daily Challenge</h3>
                <p className="text-sm text-gray-500">5 questions • Math</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Practice */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Practice</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-600 font-medium">-7</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Quadratic Equations</h3>
                  <p className="text-sm text-gray-500">Most missed topic</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Practice Now
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <span className="text-yellow-600 font-medium">-4</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Reading Inference</h3>
                  <p className="text-sm text-gray-500">Needs improvement</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Practice Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;