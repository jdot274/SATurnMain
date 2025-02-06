import React, { useState, useEffect, useRef } from 'react';
import { Search, File, X, Plus } from 'lucide-react';
import {
  AnimatedBackground,
  BestTestPrepApp,
  BlueSun,
  CometProgress,
  ComponentOutlines,
  DotSphere,
  DraggableElement,
  EditableText,
  ErrorBoundary,
  ExamCountdownBubble,
  ExamCountdownPopup,
  ExamDateBadge,
  FlashcardBackground,
  Footer3D,
  GreenProgressBubble,
  GreenProgressDemo,
  GreenStyledPopup,
  GridInsModal,
  GridSphere,
  InfoBubble,
  InfoHovercard,
  InfoIcon,
  InteractiveGraph,
  LayoutVisualizer,
  LocationSearch,
  LottieCheck,
  MathSymbols,
  MultipleChoiceModal,
  Navigation,
  NoiseOverlay,
  OrbConsole,
  PageLogo,
  PersonalizedLearning,
  ProgressTracker,
  ProgressTrackerSection,
  QuadraticTheory,
  QuickActions,
  RecentTestCard,
  SATDailyChallenge,
  SATExplainedModal,
  SATInfoSection,
  SATSectionsInfo,
  SATurnLogo,
  SaturnRing,
  SaturnSphere,
  ScheduleCalendarLocation,
  ShieldIcon,
  SignInForm,
  SignUpBanner,
  SpaceCard,
  Sphere,
  StartButton,
  TestOptions,
  ThermometerProgress,
  VideoFormatDisplay,
  Welcome,
  WelcomeBackBanner,
  WelcomeBadges,
  WelcomeBubble,
  YouAreOnTrack,
  ZoomControls
} from '.';
import { Container } from './figmacomponentgreen/components/Container';
import { CardBackground } from './figmacomponentgreen/components/CardBackground';
import { CardBg } from './figmacomponentgreen/components/CardBg';
import { GradientCard } from './figmacomponentgreen/components/GradientCard/GradientCard';
import { InviteCard } from './InviteCard';

interface ComponentInfo {
  name: string;
  path: string;
  Component: React.ComponentType;
}

const ComponentSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComponent, setSelectedComponent] = useState<ComponentInfo | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [showAddToGridButton, setShowAddToGridButton] = useState(false);

  const handleAddToGrid = (component: ComponentInfo) => {
    // Get existing components from localStorage or initialize empty array
    const existingComponents = JSON.parse(localStorage.getItem('gridComponents') || '[]');

    // Add new component if not already present
    if (!existingComponents.find((c: ComponentInfo) => c.name === component.name)) {
      const updatedComponents = [...existingComponents, {
        name: component.name,
        path: component.path,
        type: component.Component.name
      }];
      localStorage.setItem('gridComponents', JSON.stringify(updatedComponents));
      
      // Trigger a custom event to notify GreenStyledPopup
      window.dispatchEvent(new CustomEvent('componentAdded', { 
        detail: { 
          name: component.name,
          path: component.path,
          type: component.Component.name
        } 
      }));
    }
  };

  const components: ComponentInfo[] = [
    // Core Components
    { name: 'AnimatedBackground', path: '/src/components/AnimatedBackground.tsx', Component: AnimatedBackground },
    { name: 'BestTestPrepApp', path: '/src/components/BestTestPrepApp.tsx', Component: BestTestPrepApp },
    { name: 'BlueSun', path: '/src/components/BlueSun.tsx', Component: BlueSun },
    { name: 'CometProgress', path: '/src/components/CometProgress.tsx', Component: CometProgress },
    { name: 'ComponentOutlines', path: '/src/components/ComponentOutlines.tsx', Component: ComponentOutlines },
    { name: 'DotSphere', path: '/src/components/DotSphere.tsx', Component: DotSphere },
    { name: 'DraggableElement', path: '/src/components/DraggableElement.tsx', Component: DraggableElement },
    { name: 'EditableText', path: '/src/components/EditableText.tsx', Component: EditableText },
    { name: 'ErrorBoundary', path: '/src/components/ErrorBoundary.tsx', Component: ErrorBoundary },
    { name: 'ExamCountdownBubble', path: '/src/components/ExamCountdownBubble.tsx', Component: ExamCountdownBubble },
    { name: 'ExamCountdownPopup', path: '/src/components/ExamCountdownPopup.tsx', Component: ExamCountdownPopup },
    { name: 'ExamDateBadge', path: '/src/components/ExamDateBadge.tsx', Component: ExamDateBadge },
    { name: 'FlashcardBackground', path: '/src/components/FlashcardBackground.tsx', Component: FlashcardBackground },
    { name: 'Footer3D', path: '/src/components/Footer3D.tsx', Component: Footer3D },
    { name: 'GreenProgressBubble', path: '/src/components/GreenProgressBubble.tsx', Component: GreenProgressBubble },
    { name: 'GreenProgressDemo', path: '/src/components/GreenProgressDemo.tsx', Component: GreenProgressDemo },
    { name: 'GreenStyledPopup', path: '/src/components/GreenStyledPopup.tsx', Component: GreenStyledPopup },
    { name: 'GridInsModal', path: '/src/components/GridInsModal.tsx', Component: GridInsModal },
    { name: 'GridSphere', path: '/src/components/GridSphere.tsx', Component: GridSphere },
    { name: 'InfoBubble', path: '/src/components/InfoBubble.tsx', Component: InfoBubble },
    { name: 'InfoHovercard', path: '/src/components/InfoHovercard.tsx', Component: InfoHovercard },
    { name: 'InfoIcon', path: '/src/components/InfoIcon.tsx', Component: InfoIcon },
    { name: 'InteractiveGraph', path: '/src/components/InteractiveGraph.tsx', Component: InteractiveGraph },
    { name: 'LayoutVisualizer', path: '/src/components/LayoutVisualizer.tsx', Component: LayoutVisualizer },
    { name: 'LocationSearch', path: '/src/components/LocationSearch.tsx', Component: LocationSearch },
    { name: 'LottieCheck', path: '/src/components/LottieCheck.tsx', Component: LottieCheck },
    { name: 'MathSymbols', path: '/src/components/MathSymbols.tsx', Component: MathSymbols },
    { name: 'MultipleChoiceModal', path: '/src/components/MultipleChoiceModal.tsx', Component: MultipleChoiceModal },
    { name: 'Navigation', path: '/src/components/Navigation.tsx', Component: Navigation },
    { name: 'NoiseOverlay', path: '/src/components/backgrounds/NoiseOverlay.tsx', Component: NoiseOverlay },
    { name: 'OrbConsole', path: '/src/components/OrbConsole.tsx', Component: OrbConsole },
    { name: 'PageLogo', path: '/src/components/PageLogo.tsx', Component: PageLogo },
    { name: 'PersonalizedLearning', path: '/src/components/PersonalizedLearning.tsx', Component: PersonalizedLearning },
    { name: 'ProgressTracker', path: '/src/components/ProgressTracker.tsx', Component: ProgressTracker },
    { name: 'ProgressTrackerSection', path: '/src/components/ProgressTrackerSection.tsx', Component: ProgressTrackerSection },
    { name: 'QuadraticTheory', path: '/src/components/QuadraticTheory.tsx', Component: QuadraticTheory },
    { name: 'QuickActions', path: '/src/components/QuickActions.tsx', Component: QuickActions },
    { name: 'RecentTestCard', path: '/src/components/RecentTestCard.tsx', Component: RecentTestCard },
    { name: 'SATDailyChallenge', path: '/src/components/SATDailyChallenge.tsx', Component: SATDailyChallenge },
    { name: 'SATExplainedModal', path: '/src/components/SATExplainedModal.tsx', Component: SATExplainedModal },
    { name: 'SATInfoSection', path: '/src/components/SATInfoSection.tsx', Component: SATInfoSection },
    { name: 'SATSectionsInfo', path: '/src/components/SATSectionsInfo.tsx', Component: SATSectionsInfo },
    { name: 'SATurnLogo', path: '/src/components/SATurnLogo.tsx', Component: SATurnLogo },
    { name: 'SaturnRing', path: '/src/components/SaturnRing.tsx', Component: SaturnRing },
    { name: 'SaturnSphere', path: '/src/components/SaturnSphere.tsx', Component: SaturnSphere },
    { name: 'ScheduleCalendarLocation', path: '/src/components/ScheduleCalendarLocation.tsx', Component: ScheduleCalendarLocation },
    { name: 'ShieldIcon', path: '/src/components/ShieldIcon.tsx', Component: ShieldIcon },
    { name: 'SignInForm', path: '/src/components/SignInForm.tsx', Component: SignInForm },
    { name: 'SignUpBanner', path: '/src/components/SignUpBanner.tsx', Component: SignUpBanner },
    { name: 'SpaceCard', path: '/src/components/SpaceCard.tsx', Component: SpaceCard },
    { name: 'Sphere', path: '/src/components/Sphere.tsx', Component: Sphere },
    { name: 'StartButton', path: '/src/components/StartButton.tsx', Component: StartButton },
    { name: 'TestOptions', path: '/src/components/TestOptions.tsx', Component: TestOptions },
    { name: 'ThermometerProgress', path: '/src/components/ThermometerProgress.tsx', Component: ThermometerProgress },
    { name: 'VideoFormatDisplay', path: '/src/components/VideoFormatDisplay.tsx', Component: VideoFormatDisplay },
    { name: 'Welcome', path: '/src/components/Welcome.tsx', Component: Welcome },
    { name: 'WelcomeBackBanner', path: '/src/components/WelcomeBackBanner.tsx', Component: WelcomeBackBanner },
    { name: 'WelcomeBadges', path: '/src/components/WelcomeBadges.tsx', Component: WelcomeBadges },
    { name: 'WelcomeBubble', path: '/src/components/WelcomeBubble.tsx', Component: WelcomeBubble },
    { name: 'YouAreOnTrack', path: '/src/components/YouAreOnTrack.tsx', Component: YouAreOnTrack },
    { name: 'ZoomControls', path: '/src/components/ZoomControls.tsx', Component: ZoomControls },
    
    // Figma Green Components
    { name: 'Container', path: '/src/components/figmacomponentgreen/components/Container.tsx', Component: Container },
    { name: 'CardBackground', path: '/src/components/figmacomponentgreen/components/CardBackground.tsx', Component: CardBackground },
    { name: 'CardBg', path: '/src/components/figmacomponentgreen/components/CardBg.tsx', Component: CardBg },
    { name: 'GradientCard', path: '/src/components/figmacomponentgreen/components/GradientCard/GradientCard.tsx', Component: GradientCard }
  ];

  const filteredComponents = components.filter(component =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleComponentSelect = (component: ComponentInfo) => {
    setSelectedComponent(component);
  };

  return (
    <>
      {/* Search Button */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl
                 backdrop-blur-xl bg-white/5 border border-white/10
                 text-white/60 hover:bg-white/10 transition-colors
                 flex items-center gap-3 group"
        >
        <Search className="w-4 h-4" />
        <span>Search components</span>
        <kbd className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-xs">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh]">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div
            ref={modalRef}
            className="relative w-full max-w-xl backdrop-blur-xl bg-white/5 rounded-2xl
                     border border-white/10 overflow-hidden animate-fade-in"
          >
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search components..."
                className="w-full bg-transparent border-b border-white/10 px-12 py-4
                         text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg
                         hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5 text-white/40" />
              </button>
            </div>

            {/* Component List */}
            {searchTerm && (
              <div className="max-h-[60vh] overflow-y-auto">
                {filteredComponents.length > 0 ? (
                  <div className="p-2">
                    {filteredComponents.map((component) => (
                      <button
                        key={component.path}
                        onClick={() => handleComponentSelect(component)}
                        className="w-full p-3 rounded-xl text-left hover:bg-white/5
                                 transition-colors flex items-center gap-3 group"
                      >
                        <File className="w-5 h-5 text-white/40 group-hover:text-blue-400
                                     transition-colors" />
                        <div>
                          <div className="text-white font-medium">{component.name}</div>
                          <div className="text-white/40 text-sm">{component.path}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-white/40">
                    No components found
                  </div>
                )}
              </div>
            )}

            {/* Quick Access */}
            {!searchTerm && (
              <div className="p-4">
                <div className="text-sm text-white/40 px-3 mb-2">Quick Access</div>
                <div className="grid grid-cols-2 gap-2">
                  {components.slice(0, 6).map((component) => (
                    <button
                      key={component.path}
                      onClick={() => handleComponentSelect(component)}
                      className="p-3 rounded-xl text-left hover:bg-white/5
                               transition-colors flex items-center gap-3 group"
                    >
                      <File className="w-5 h-5 text-white/40 group-hover:text-blue-400
                                   transition-colors" />
                      <span className="text-white/90">{component.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Component Display Modal */}
      {selectedComponent && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedComponent(null)}
          />
          
          <div className="relative w-full max-w-4xl backdrop-blur-xl bg-white/5 rounded-2xl p-8
                       border border-white/10 space-y-6 animate-fade-in
                       max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedComponent(null)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5
                        transition-colors hover:scale-110 active:scale-95"
            >
              <X className="w-5 h-5 text-white/60" />
            </button>

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {selectedComponent.name}
                </h2>
                <div className="text-white/40 text-sm">
                  {selectedComponent.path}
                </div>
              </div>
              <button
                onClick={() => handleAddToGrid(selectedComponent)}
                className="px-4 py-2 rounded-lg bg-green-500/20 text-green-400 
                         border border-green-500/30 hover:bg-green-500/30 
                         transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add to Grid
              </button>
            </div>

            <div className="space-y-4">
              {/* Component Preview */}
              <div className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6">
                <selectedComponent.Component />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ComponentSearch;