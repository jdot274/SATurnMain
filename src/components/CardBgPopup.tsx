import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './figmacomponentgreen/components/Button';
import { Icon1 } from './figmacomponentgreen/icons/Icon1';

const CardBgPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [labelClickCount, setLabelClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(prev => prev + 1);
  };

  const handleLabelClick = () => {
    setLabelClickCount(prev => prev + 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Popup Content */}
      <div className="relative w-full max-w-4xl backdrop-blur-xl bg-white/5 rounded-2xl p-8
                   border border-white/10 animate-fade-in">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5 transition-colors
                   hover:scale-110 active:scale-95"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        {/* Interactive Content */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Card Background</h2>
            <Button
              className="scale-90"
              icon={<Icon1 className="icon-instance-node" />}
              onClick={handleButtonClick}
              label={clickCount > 0 ? `Clicked ${clickCount} times!` : "Click me!"}
            />
          </div>
          
          <div className="relative aspect-[16/9] w-full">
            <img 
              src="/src/components/figmacomponentgreen/static/img/Design (3).svg"
              alt="Card Background"
              className="w-full h-full object-contain"
            />
            {/* Interactive Label Button */}
            <div className="absolute top-[58%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
              <Button
                className="scale-[0.85]"
                icon={<Icon1 className="icon-instance-node" />}
                onClick={handleLabelClick}
                label={labelClickCount > 0 ? `Label clicked ${labelClickCount} times!` : "Label here"}
              />
            </div>
          </div>

        </div>

        {/* Optional Caption */}
        <div className="mt-4 text-center">
          <p className="text-white/60 text-sm">
            Click anywhere outside to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardBgPopup;