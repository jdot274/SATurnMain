import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Layers, LineChart, TestTube, Waves, GraduationCap, BookOpen } from 'lucide-react';

const navItemStyles = {
  base: "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2",
  default: "text-white/70 hover:text-white hover:bg-white/10",
  active: "bg-white/20 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
};

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'SATurn', path: '/' },
    { icon: GraduationCap, label: 'Study', path: '/study3' },
    { icon: TestTube, label: 'Tests', path: '/tests' },
    { icon: BookOpen, label: 'SAT Explained', path: '/practice2' },
    { icon: LineChart, label: 'Progress', path: '/progress' },
  ];

  return (
    <nav className="sticky top-0 z-50 flex justify-center py-4 backdrop-blur-sm">
      <div className="relative flex items-center">
        <div className="absolute -inset-1 bg-blue-500/30 rounded-3xl blur-lg animate-pulse" />
        
        <div className="relative px-6 h-12 rounded-2xl border border-white/10
                      bg-gradient-to-b from-blue-500/20 to-blue-600/20 backdrop-blur-2xl
                      shadow-[0_4px_20px_rgba(59,130,246,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)]
                      flex items-center gap-4 mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`${item.className || `${navItemStyles.base} ${
                  isActive ? navItemStyles.active : navItemStyles.default
                }`}`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
        
      </div>
    </nav>
  );
};

export default Navigation;