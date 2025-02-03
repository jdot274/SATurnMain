import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Search } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  zipCode: string;
}

const mockLocations: Location[] = [
  { id: '1', name: 'New York, NY', zipCode: '10001' },
  { id: '2', name: 'Los Angeles, CA', zipCode: '90001' },
  { id: '3', name: 'Chicago, IL', zipCode: '60601' },
  { id: '4', name: 'Houston, TX', zipCode: '77001' },
  { id: '5', name: 'Phoenix, AZ', zipCode: '85001' },
  { id: '6', name: 'Philadelphia, PA', zipCode: '19101' },
];

interface LocationSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ value, onChange }) => {
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (inputValue: string) => {
    onChange(inputValue);
    
    if (inputValue.length > 0) {
      const filtered = mockLocations.filter(location => 
        location.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        location.zipCode.includes(inputValue)
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (location: Location) => {
    onChange(location.name);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
      <input
        type="text"
        placeholder="Enter ZIP code or location"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => value && setShowSuggestions(true)}
        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5
                 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2">
        <Search className="w-5 h-5 text-white/40" />
      </button>

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute w-full mt-2 bg-slate-900 rounded-xl border border-white/10
                      shadow-lg overflow-hidden z-[60]">
          {suggestions.map((location) => (
            <button
              key={location.id}
              onClick={() => handleSuggestionClick(location)}
              className="w-full px-4 py-2 text-left text-white/90 hover:bg-slate-800 transition-colors
                       flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-white/40" />
              <div>
                <span className="block">{location.name}</span>
                <span className="text-sm text-white/40">ZIP: {location.zipCode}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;