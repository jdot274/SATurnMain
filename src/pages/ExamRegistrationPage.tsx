import React, { useState } from 'react';
import { Calendar, MapPin, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import PageLogo from '../components/PageLogo';
import Navigation from '../components/Navigation';
import LocationSearch from '../components/LocationSearch';

interface Location {
  id: string;
  name: string;
  address: string;
  distance: string;
  availableSeats: number;
}

const ExamRegistrationPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [location, setLocation] = useState('');
  const [showLocations, setShowLocations] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const mockLocations: Location[] = [
    {
      id: '1',
      name: 'Central High School',
      address: '123 Education Ave, City, State',
      distance: '2.3 miles',
      availableSeats: 45
    },
    {
      id: '2',
      name: 'West Community College',
      address: '456 Learning Blvd, City, State',
      distance: '4.1 miles',
      availableSeats: 32
    },
    {
      id: '3',
      name: 'East Technical Institute',
      address: '789 Knowledge St, City, State',
      distance: '5.8 miles',
      availableSeats: 28
    }
  ];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShowLocations(true);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDay };
  };

  const { daysInMonth, firstDay } = getDaysInMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  return (
    <div className="h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      <div className="h-screen flex flex-col">
        <PageLogo />
        <Navigation />

        <main className="flex-1 container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white">Register for SAT Exam</h1>
              <p className="text-white/60">Select your preferred date and location</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-3 border border-white/10 relative z-[70]">
              <LocationSearch
                value={location}
                onChange={setLocation}
              />
          </div>

          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-3 border border-white/10 mt-4 relative z-[50]">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white/70" />
              </button>
              <h2 className="text-xl font-semibold text-white">
                {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </h2>
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white/70" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-white/60 text-sm py-1">{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {blanks.map(blank => (
                <div key={`blank-${blank}`} className="aspect-square" />
              ))}
              {days.map(day => {
                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                const isSelected = selectedDate?.toDateString() === date.toDateString();
                const isAvailable = day % 7 === 0 || day % 7 === 6; // Weekends only

                return (
                  <button
                    key={day}
                    onClick={() => isAvailable && handleDateSelect(date)}
                    disabled={!isAvailable}
                    className={`
                      aspect-square rounded-lg flex items-center justify-center text-sm
                      transition-all duration-200 relative group
                      ${isAvailable 
                        ? 'hover:bg-white/20 cursor-pointer' 
                        : 'cursor-not-allowed opacity-50'}
                      ${isSelected
                        ? 'bg-blue-500 text-white'
                        : 'text-white/90'}
                    `}
                  >
                    {day}
                    {isAvailable && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2
                                    bg-white/10 backdrop-blur-md px-2 py-1 rounded text-xs
                                    opacity-0 group-hover:opacity-100 transition-opacity
                                    pointer-events-none whitespace-nowrap">
                        Available
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Test Centers */}
          {showLocations && (
            <div className="space-y-3 mt-4">
              {mockLocations.map(location => (
                <div
                  key={location.id}
                  className="backdrop-blur-xl bg-white/5 rounded-2xl p-3 border border-white/10
                           hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{location.name}</h3>
                      <p className="text-white/60 text-sm mt-1">{location.address}</p>
                      <p className="text-white/40 text-sm mt-2">{location.distance}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-green-400">{location.availableSeats} seats available</span>
                      <button className="mt-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg
                                     border border-blue-500/30 hover:bg-blue-500/30 transition-colors
                                     block ml-auto">
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ExamRegistrationPage;