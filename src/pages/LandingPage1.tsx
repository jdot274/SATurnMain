import React, { useState, useEffect, useRef, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { TopButtons } from '../components/landing/TopButtons';
import ShimmerCard from '../components/ShimmerCard';
import SaturnLogoTitle from '../components/SaturnLogoTitle';
import SaturnLogoTitle2 from '../components/SaturnLogoTitle2';
import ExamCountdownBubble from '../components/ExamCountdownBubble';
import ProgressWindow from '../components/ProgressWindow';
import { useAuth } from '../contexts/AuthContext';
import Sphere from '../components/Sphere';
import SphereCopy from '../components/SphereCopy';
import { Activity } from 'lucide-react';
import BestTestPrepApp from '../components/BestTestPrepApp';
import WelcomeBackBanner from '../components/WelcomeBackBanner';
import ExamDateBadge from '../components/ExamDateBadge';
import QuickActions from '../components/QuickActions';
import PageLogo from '../components/PageLogo';
import BlueSun from '../components/BlueSun';
import { Calendar, AppWindow, User, Trophy, Target, Brain, BookOpen, GraduationCap, ChevronRight, Sparkles, Bell } from 'lucide-react';
import SpaceCard from '../components/SpaceCard';
import PersonalizedLearning from '../components/PersonalizedLearning';
import YouAreOnTrack from '../components/YouAreOnTrack';
import LayoutVisualizer from '../components/LayoutVisualizer';
import ComponentOutlines from '../components/ComponentOutlines';
import { Link } from 'react-router-dom';
import { Palette, ZoomIn, ZoomOut, ChevronUp, ChevronDown, Move, Save, RotateCcw, History } from 'lucide-react';
import { cn } from '@/lib/utils';
import DraggableElement from '../components/DraggableElement';

export const LandingPage1: FC = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  const [today] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);
  const [showLayout, setShowLayout] = useState(false);
  const [showComponentNames, setShowComponentNames] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [layouts, setLayouts] = useState<Record<string, { x: number; y: number }>>({});
  const [versions, setVersions] = useState<Array<{ timestamp: number; layouts: Record<string, { x: number; y: number }> }>>([]);
  const [showVersions, setShowVersions] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [selectedComponents, setSelectedComponents] = useState<Set<string>>(new Set());
  const dragStartPos = useRef({ x: 0, y: 0 });
  const elementStartPos = useRef({ x: 0, y: 0 });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isEditing) {
      setIsEditing(false);
      setSelectedComponent(null);
      setSelectedComponents(new Set());
      document.body.style.cursor = 'default';
      
      // Remove highlight outlines
      document.querySelectorAll('[data-component-id]').forEach(el => {
        (el as HTMLElement).style.outline = '';
        (el as HTMLElement).style.outlineOffset = '';
      });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditing]);
  const handleStartEdit = () => {
    setIsEditing(true);
    document.body.style.cursor = 'crosshair';
  };

  const handleComponentClick = (e: MouseEvent) => {
    if (!isEditing) return;

    e.preventDefault();
    e.stopPropagation();

    let target = e.target as HTMLElement;
    while (target && !target.dataset.componentId) {
      target = target.parentElement as HTMLElement;
    }

    if (target?.dataset.componentId) {
      // Handle multi-select with Shift key
      if (e.shiftKey) {
        setSelectedComponents(prev => {
          const newSet = new Set(prev);
          newSet.add(target.dataset.componentId);
          return newSet;
        });
      } else {
        setSelectedComponents(new Set([target.dataset.componentId]));
      }

      target.style.outline = '2px solid #3b82f6';
      target.style.outlineOffset = '2px';
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!selectedComponent || !isEditing) return;

    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;

    const newPosition = {
      x: elementStartPos.current.x + dx,
      y: elementStartPos.current.y + dy
    };

    setLayouts(prev => ({
      ...prev,
      [selectedComponent]: newPosition
    }));

    const element = document.querySelector(`[data-component-id="${selectedComponent}"]`);
    if (element) {
      (element as HTMLElement).style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    }
  };

  const handleMouseUp = () => {
    if (selectedComponent) {
      setVersions(prev => [...prev, {
        timestamp: Date.now(),
        layouts: { ...layouts }
      }]);
    }
    setSelectedComponent(null);
    document.body.style.cursor = 'default';
  };

  const handleSave = () => {
    localStorage.setItem('saturnLayouts', JSON.stringify(layouts));
    setIsEditing(false);
    setSelectedComponent(null);
    document.body.style.cursor = 'default';
    
    document.querySelectorAll('[data-component-id]').forEach(el => {
      (el as HTMLElement).style.outline = '';
      (el as HTMLElement).style.outlineOffset = '';
    });
  };

  const handleUndo = () => {
    if (versions.length > 0) {
      const previousVersion = versions[versions.length - 2];
      setLayouts(previousVersion?.layouts || {});
      setVersions(prev => prev.slice(0, -1));
    }
  };

  const handleRevertToVersion = (version: { timestamp: number; layouts: Record<string, { x: number; y: number }> }) => {
    setLayouts(version.layouts);
    setVersions(prev => prev.slice(0, prev.findIndex(v => v.timestamp === version.timestamp) + 1));
    setShowVersions(false);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
    applyZoom(Math.min(zoom + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
    applyZoom(Math.max(zoom - 10, 50));
  };

  const applyZoom = (zoomLevel: number) => {
    const root = document.getElementById('root');
    if (root) {
      root.style.transform = `scale(${zoomLevel / 100})`;
      root.style.transformOrigin = 'center top';
    }
  };

  const handleBringForward = () => {
    selectedComponents.forEach(id => {
      const element = document.querySelector(`[data-component-id="${id}"]`) as HTMLElement;
      if (!element) return;
      const currentZ = parseInt(element.style.zIndex || '0');
      element.style.zIndex = `${currentZ + 1}`;
    });
  };

  const handleSendBackward = () => {
    selectedComponents.forEach(id => {
      const element = document.querySelector(`[data-component-id="${id}"]`) as HTMLElement;
      if (!element) return;
      const currentZ = parseInt(element.style.zIndex || '0');
      element.style.zIndex = `${Math.max(currentZ - 1, 0)}`;
    });
  };

  useEffect(() => {
    if (isEditing) {
      window.addEventListener('click', handleComponentClick, true);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        window.removeEventListener('click', handleComponentClick, true);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isEditing, selectedComponent]);

  useEffect(() => {
    const savedLayouts = localStorage.getItem('saturnLayouts');
    if (savedLayouts) {
      setLayouts(JSON.parse(savedLayouts));
    }
  }, []);

  const notifications = [
    { id: 1, title: 'Daily Challenge', message: 'New daily challenge available!', time: '5m ago', type: 'challenge' },
    { id: 2, title: 'Study Streak', message: 'You\'re on a 7-day streak! Keep it up!', time: '1h ago', type: 'streak' },
    { id: 3, title: 'Practice Test', message: 'Your last test score is ready', time: '2h ago', type: 'test' }
  ];

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
    <div className="static w-full h-full bg-[#0a041a] text-white overflow-hidden">
      <LayoutVisualizer show={showLayout} />
      <ComponentOutlines show={showLayout} />
      
      {/* Edit Mode Toggle */}
      <button
        onClick={handleStartEdit}
        className={cn("fixed bottom-4 right-4 z-[200] p-2 rounded-lg backdrop-blur-xl border transition-colors",
          isEditing
            ? "bg-blue-500/20 border-blue-500/30 text-blue-400"
            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
        )}
        title="Edit Layout"
      >
        <Move className="w-5 h-5" />
      </button>

      {/* Save Button */}
      {isEditing && (
        <button
          onClick={handleSave}
          className="fixed bottom-4 right-16 z-[200] p-2 rounded-lg backdrop-blur-xl bg-green-500/20 border border-green-500/30 
                   text-green-400 hover:bg-green-500/30 transition-colors"
          title="Save Layout"
        >
          <Save className="w-5 h-5" />
        </button>
      )}

      {/* Undo Button */}
      {isEditing && versions.length > 0 && (
        <button
          onClick={handleUndo}
          className="fixed bottom-4 right-28 z-[200] p-2 rounded-lg backdrop-blur-xl bg-yellow-500/20 border border-yellow-500/30 
                   text-yellow-400 hover:bg-yellow-500/30 transition-colors"
          title="Undo Last Change"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
      )}

      {/* Version History */}
      {isEditing && versions.length > 0 && (
        <div className="fixed bottom-4 right-40 z-[200]">
          <button
            onClick={() => setShowVersions(!showVersions)}
            className="p-2 rounded-lg backdrop-blur-xl bg-purple-500/20 border border-purple-500/30 
                     text-purple-400 hover:bg-purple-500/30 transition-colors"
            title="Version History"
          >
            <History className="w-5 h-5" />
          </button>

          {showVersions && (
            <div className="absolute bottom-full right-0 mb-2 w-64 backdrop-blur-xl bg-white/5 
                         rounded-lg border border-white/10 overflow-hidden">
              <div className="max-h-[300px] overflow-y-auto">
                {versions.map((version, index) => (
                  <button
                    key={version.timestamp}
                    onClick={() => handleRevertToVersion(version)}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-white/5 transition-colors
                             flex items-center justify-between"
                  >
                    <span className="text-white/60">Version {index + 1}</span>
                    <span className="text-white/40 text-xs">
                      {new Date(version.timestamp).toLocaleTimeString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Green Components Button */}
      <Link
        to="/green-components"
        className="absolute top-[10%] left-[5%] z-[9999] px-3 py-1.5 rounded-lg bg-green-500/20 
                 border border-green-500/30 text-green-400 text-sm hover:bg-green-500/30 
                 transition-colors flex items-center gap-2"
      >
        <Palette className="w-4 h-4" />
        <span>Components</span>
      </Link>
      
      {/* Layout Toggle Button */}
      <button
        onClick={() => setShowLayout(!showLayout)}
        className="fixed top-4 right-4 z-[9999] px-3 py-1.5 rounded-lg bg-green-500/20 
                 border border-green-500/30 text-green-400 text-sm hover:bg-green-500/30 
                 transition-colors"
      >
        {showLayout ? 'Hide' : 'Show'} Layout
      </button>
      
      {/* Component Names Toggle Button */}
      <button
        onClick={() => setShowComponentNames(!showComponentNames)}
        className="fixed top-4 right-36 z-[9999] px-3 py-1.5 rounded-lg bg-purple-500/20 
                 border border-purple-500/30 text-purple-400 text-sm hover:bg-purple-500/30 
                 transition-colors"
      >
        {showComponentNames ? 'Hide' : 'Show'} Components
      </button>
      
      {/* Component Name Labels */}
      {showComponentNames && (
        <div className="fixed inset-0 pointer-events-none z-[9997]">
          {/* PageLogo Label */}
          <div className="absolute top-4 left-4 px-2 py-1 bg-purple-500/20 rounded text-purple-400 text-xs
                       border border-purple-500/30 backdrop-blur-sm group">
            <div className="pointer-events-auto select-text cursor-text">PageLogo.tsx</div>
          </div>

          {/* Navigation Label */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-2 py-1 bg-purple-500/20 rounded text-purple-400 text-xs
                       border border-purple-500/30 backdrop-blur-sm group">
            <div className="pointer-events-auto select-text cursor-text">Navigation.tsx</div>
          </div>

          {/* Welcome Label */}
          <div className="absolute top-32 left-8 px-2 py-1 bg-purple-500/20 rounded text-purple-400 text-xs
                       border border-purple-500/30 backdrop-blur-sm group">
            <div className="pointer-events-auto select-text cursor-text">Welcome.tsx</div>
          </div>

          {/* PersonalizedLearning Label */}
          <div className="absolute top-[350px] left-8 px-2 py-1 bg-purple-500/20 rounded text-purple-400 text-xs
                       border border-purple-500/30 backdrop-blur-sm group">
            <div className="pointer-events-auto select-text cursor-text">PersonalizedLearning.tsx</div>
          </div>

          {/* YouAreOnTrack Label */}
          <div className="absolute top-[650px] left-8 px-2 py-1 bg-purple-500/20 rounded text-purple-400 text-xs
                       border border-purple-500/30 backdrop-blur-sm group">
            <div className="pointer-events-auto select-text cursor-text">YouAreOnTrack.tsx</div>
          </div>

          {/* BlueSun Label */}
          <div className="absolute top-[10vh] left-[calc(48%-20px)] -translate-x-1/2 px-2 py-1 bg-purple-500/20 rounded text-purple-400 text-xs
                       border border-purple-500/30 backdrop-blur-sm group">
            <div className="pointer-events-auto select-text cursor-text">BlueSun.tsx</div>
          </div>

          {/* SphereCopy Label */}
          <div className="absolute top-[15vh] left-[calc(48%-20px)] -translate-x-1/2 px-2 py-1 bg-purple-500/20 rounded text-purple-400 text-xs
                       border border-purple-500/30 backdrop-blur-sm group">
            <div className="pointer-events-auto select-text cursor-text">SphereCopy.tsx</div>
          </div>

          {/* Action Buttons Label */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 px-2 py-1 bg-purple-500/20 rounded text-purple-400 text-xs
                       border border-purple-500/30 backdrop-blur-sm group">
            <div className="pointer-events-auto select-text cursor-text">ActionButtons.tsx</div>
          </div>

          {/* Expert Guidance Label */}
          <div className="absolute top-40 right-1/2 translate-x-1/2 px-2 py-1 bg-purple-500/20 rounded text-purple-400 text-xs
                       border border-purple-500/30 backdrop-blur-sm group">
            <div className="pointer-events-auto select-text cursor-text">ExpertGuidance.tsx</div>
          </div>
        </div>
      )}
      
      {/* Fixed position logo and navigation at top */}
      <PageLogo />
      
      {/* Background Effects */}
      <DraggableElement id="background-effects" className="absolute inset-0 overflow-hidden z-[5] pointer-events-none">
        {/* Planet */}
        <div className="absolute w-[120vh] h-[120vh] rounded-full
                      bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950
                      -top-[60vh] left-[calc(56%-20px)] transform -translate-x-1/2 opacity-40
                      blur-sm" />

        {/* Atmospheric glow effect overlay */}
        <div className="absolute w-[200vw] h-[100vh] -top-[50vh] -left-[50vw] 
                      bg-gradient-to-b from-blue-600/20 via-blue-800/10 to-transparent
                      blur-3xl transform" />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950" />
      </DraggableElement>

      {/* Top Buttons - Inside app bounds */}
      <TopButtons />

      <Navigation />

      {/* Blue Sun Layer - Moved in front of Welcome */}
      <div className="absolute inset-0 z-[20] pointer-events-none">
        {/* Blue Sun */}
        <div className="absolute w-[140vh] h-[140vh] -top-[65vh] left-[50%] transform -translate-x-1/2">
          <BlueSun />
        </div>
        
        {/* Saturn Sphere */}
        <div className="absolute w-[100vh] h-[100vh] -top-[45vh] left-[50%] transform -translate-x-1/2">
          <SphereCopy />
        </div>
      </div>

      {/* Notifications - Positioned inside root container */}
      <div className="fixed top-4 right-4 z-[100] scale-[0.6] origin-top-right
                    sm:scale-[0.7] md:scale-[0.8] lg:scale-[0.9] xl:scale-100">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10
                     hover:bg-white/10 transition-colors"
        >
          <Bell className="w-5 h-5 text-white/60" />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full 
                           w-4 h-4 flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </button>

        {showNotifications && (
          <div className="absolute top-full right-0 mt-2 w-80 backdrop-blur-xl bg-white/5 
                       rounded-lg border border-white/10 shadow-lg overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h3 className="text-sm font-medium text-white">Notifications</h3>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {notifications.map(notification => (
                <div
                  key={notification.id}
                  className="p-3 border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "p-2 rounded-lg",
                      notification.type === 'challenge' ? "bg-green-500/20 text-green-400" : "",
                      notification.type === 'streak' ? "bg-purple-500/20 text-purple-400" : "",
                      notification.type === 'test' ? "bg-blue-500/20 text-blue-400" : ""
                    )}>
                      {notification.type === 'challenge' && <Target className="w-4 h-4" />}
                      {notification.type === 'streak' && <Trophy className="w-4 h-4" />}
                      {notification.type === 'test' && <BookOpen className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                      <p className="text-sm text-white/60">{notification.message}</p>
                      <span className="text-xs text-white/40">{notification.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-white/10 text-center">
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                View all notifications
              </button>
            </div>
          </div>
        )}
      </div>

      <main className="flex-1 relative z-[10] container mx-auto px-4 py-8">
        <DraggableElement id="main-content" className="max-w-4xl mx-auto space-y-12">
          <SaturnLogoTitle2 />
          <DraggableElement id="shimmer-section" className="flex justify-center">
            <ShimmerCard title="Welcome to SATurn" className="w-full">
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  Embark on your SAT preparation journey with our comprehensive platform designed to help you achieve your target score.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Personalized Learning</h4>
                    <p className="text-sm text-white/70">Adaptive study plans tailored to your progress.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Expert Guidance</h4>
                    <p className="text-sm text-white/70">Learn from proven strategies and techniques.</p>
                  </div>
                </div>
              </div>
            </ShimmerCard>
          </DraggableElement>
          <DraggableElement id="exam-countdown" className="flex justify-center">
            <ExamCountdownBubble daysLeft={43} className="w-[600px]" />
          </DraggableElement>
          <ProgressWindow />
          <YouAreOnTrack />
        </DraggableElement>
      </main>

      {/* Notifications - Positioned inside root container */}
      <div className="fixed top-4 right-4 z-[100] scale-[0.6] origin-top-right
                    sm:scale-[0.7] md:scale-[0.8] lg:scale-[0.9] xl:scale-100">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative p-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10
                     hover:bg-white/10 transition-colors"
        >
          <Bell className="w-5 h-5 text-white/60" />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full 
                           w-4 h-4 flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </button>

        {showNotifications && (
          <div className="absolute top-full right-0 mt-2 w-80 backdrop-blur-xl bg-white/5 
                       rounded-lg border border-white/10 shadow-lg overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h3 className="text-sm font-medium text-white">Notifications</h3>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {notifications.map(notification => (
                <div
                  key={notification.id}
                  className="p-3 border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "p-2 rounded-lg",
                      notification.type === 'challenge' ? "bg-green-500/20 text-green-400" : "",
                      notification.type === 'streak' ? "bg-purple-500/20 text-purple-400" : "",
                      notification.type === 'test' ? "bg-blue-500/20 text-blue-400" : ""
                    )}>
                      {notification.type === 'challenge' && <Target className="w-4 h-4" />}
                      {notification.type === 'streak' && <Trophy className="w-4 h-4" />}
                      {notification.type === 'test' && <BookOpen className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                      <p className="text-sm text-white/60">{notification.message}</p>
                      <span className="text-xs text-white/40">{notification.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-white/10 text-center">
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                View all notifications
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        <button
          onClick={() => navigate('/practice')}
          className="px-6 py-3 rounded-xl bg-purple-500/20 border border-purple-500/30 
                   text-purple-400 hover:bg-purple-500/30 transition-all duration-300
                   flex items-center gap-2 backdrop-blur-xl"
        >
          <Brain className="w-5 h-5" />
          Practice
        </button>
        <button
          onClick={() => navigate('/review')}
          className="px-6 py-3 rounded-xl bg-blue-500/20 border border-blue-500/30 
                   text-blue-400 hover:bg-blue-500/30 transition-all duration-300
                   flex items-center gap-2 backdrop-blur-xl"
        >
          <Activity className="w-5 h-5" />
          Review
        </button>
      </div>

      {/* Expert Guidance Buttons */}
      <div className="fixed top-24 right-1/2 translate-x-1/2 mt-16 z-30 flex gap-4">
        <button
          onClick={() => navigate('/sat')}
          className="px-6 py-3 rounded-xl bg-blue-500/20 border border-blue-500/30 
                   text-blue-400 hover:bg-blue-500/30 transition-all duration-300
                   flex items-center gap-2 backdrop-blur-xl"
        >
          <BookOpen className="w-5 h-5" />
          About SAT
        </button>
        <button
          onClick={() => navigate('/study-streak-details')}
          className="px-6 py-3 rounded-xl bg-purple-500/20 border border-purple-500/30 
                   text-purple-400 hover:bg-purple-500/30 transition-all duration-300
                   flex items-center gap-2 backdrop-blur-xl"
        >
          <GraduationCap className="w-5 h-5" />
          Learn
        </button>
      </div>
    </div>
  );
};

export default LandingPage1;