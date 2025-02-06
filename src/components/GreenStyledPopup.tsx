import React, { useState, useEffect, Suspense } from 'react';
import { X, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ErrorBoundary from './ErrorBoundary';
import { Container } from './figmacomponentgreen/components/Container';
import WelcomeBubble from './WelcomeBubble';
import BackgroundSection from './BackgroundSection';
import WelcomeBubble2 from './WelcomeBubble2';
import WelcomeBackJoey from './WelcomeBackJoey';
import InfoBubble from './InfoBubble';
import WelcomeCard2 from './WelcomeCard2';
import OrbConsole from './OrbConsole';
import { Button } from './figmacomponentgreen/components/Button';
import { Icon1 } from './figmacomponentgreen/icons/Icon1';
import SaturnLogoTitle2 from './SaturnLogoTitle2';
import { CardBg } from './figmacomponentgreen/components/CardBg';
import { CardBackground } from './figmacomponentgreen/components/CardBackground';
import { GradientCard, AnimatedButton } from './figmacomponentgreen/components/GradientCard/GradientCard';
import DotSphere from './DotSphere';
import CometProgress from './CometProgress';
import CometProgress2 from './CometProgress2';
import { WhiteLedBar } from './WhiteLedBar';
import SaturnLogoTitle from './SaturnLogoTitle';
import PersonalizedLearning from './PersonalizedLearning';
import ThermometerProgress from './ThermometerProgress';
import { InviteCard } from './InviteCard';
import VideoFormatDisplay from './VideoFormatDisplay';
import Welcome from './Welcome';
import QuickActions from './QuickActions';
import GreenProgressBubble from './GreenProgressBubble';
import ScheduleCalendarLocation from './ScheduleCalendarLocation';
import ProgressTracker from './ProgressTracker';
import SpaceCard from './SpaceCard';
import ExamCountdownBubble from './ExamCountdownBubble';
import InteractiveGraph from './InteractiveGraph';
import BlueSun from './BlueSun';
import ProgressTrackerSection from './ProgressTrackerSection';
import StudyHeader from './StudyHeader';
import YouAreOnTrack from './YouAreOnTrack';

interface ComponentCategory {
  name: string;
  components: ComponentDisplay[];
}

interface ComponentInfo {
  name: string;
  path: string;
  type: string;
  category?: string;
}

interface ComponentDisplay {
  name: string;
  path: string;
  component: React.ReactNode;
  category?: string;
}

const GreenStyledPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [labelClickCount, setLabelClickCount] = useState(0);
  const [gridComponents, setGridComponents] = useState<ComponentInfo[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const renderComponent = (type: string) => {
    const components = {
      Welcome,
      StudyHeader,
      YouAreOnTrack,
      BackgroundSection,
      PersonalizedLearning,
      WelcomeCard2: () => <WelcomeCard2 />,
      CometProgress: () => (
        <div className="w-full h-[120px] bg-[#020617] rounded-xl p-4 border border-white/10">
          <div className="relative h-full">
            <CometProgress progress={75} />
          </div>
        </div>
      ),
      CometProgress2: () => (
        <div className="w-full h-[120px] bg-[#020617] rounded-xl p-4 border border-white/10">
          <div className="relative h-full">
            <CometProgress2 progress={75} />
          </div>
        </div>
      ),
      ProgressTracker,
      ThermometerProgress: () => <ThermometerProgress progress={75} />,
      GreenProgressBubble: () => <GreenProgressBubble progress={75} size="lg" label="Overall Progress" />,
      ProgressTrackerSection: () => <ProgressTrackerSection />,
      ExamCountdownBubble: () => <ExamCountdownBubble daysLeft={43} className="w-48 h-48" />,
      QuickActions: () => <QuickActions />,
      InteractiveGraph: () => <InteractiveGraph />,
      SpaceCard: () => (
        <SpaceCard title="Design Principles">
          <div className="space-y-4 text-white/70">
            <p>Explore the fundamental principles of design through our guides.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Hierarchy</h4>
                <p className="text-sm">Learn about visual hierarchy.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Balance</h4>
                <p className="text-sm">Master balanced layouts.</p>
              </div>
            </div>
          </div>
        </SpaceCard>
      ),
      InviteCard: () => <InviteCard />,
      ScheduleCalendarLocation: () => <ScheduleCalendarLocation />,
      VideoFormatDisplay: () => <VideoFormatDisplay />,
      Container: () => <Container />,
      CardBackground: () => <CardBackground />,
      CardBg: () => <CardBg />,
      GradientCard: () => <GradientCard />,
      BlueSun: () => (
        <div className="relative w-full h-[400px] backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10">
          <BlueSun />
        </div>
      ),
      DotSphere: () => (
        <div className="relative w-full aspect-square backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full max-w-[300px] max-h-[300px]">
              <div className="absolute inset-0 bg-blue-500/40 rounded-lg z-10" />
              <ErrorBoundary>
                <Suspense fallback={null}>
                  <Canvas
                    gl={{ antialias: true }}
                    camera={{ position: [0, 0, 3], fov: 40 }}
                    style={{ background: 'transparent', width: '100%', height: '100%' }}
                  >
                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 10, 10]} intensity={3} color="#00aaff" />
                    <pointLight position={[-10, -10, -10]} intensity={2.5} color="#0088ff" />
                    <pointLight position={[0, 0, 10]} intensity={2.5} color="#0066ff" />
                    <DotSphere />
                    <OrbitControls
                      enableZoom={false}
                      enablePan={false}
                      autoRotate
                      autoRotateSpeed={1}
                    />
                  </Canvas>
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </div>
      )
    };
    const Component = components[type as keyof typeof components];
    return Component ? <Component /> : null;
  };

  useEffect(() => {
    // Load saved components from localStorage
    const savedComponents = JSON.parse(localStorage.getItem('gridComponents') || '[]');
    setGridComponents(savedComponents);

    // Listen for new components being added
    const handleComponentAdded = (event: CustomEvent) => {
      const newComponent = event.detail;
      setGridComponents(prev => [...prev, newComponent]);
    };

    window.addEventListener('componentAdded', handleComponentAdded as EventListener);
    return () => {
      window.removeEventListener('componentAdded', handleComponentAdded as EventListener);
    };
  }, []);

  const handleRemoveComponent = (index: number) => {
    const updatedComponents = gridComponents.filter((_, i) => i !== index);
    setGridComponents(updatedComponents);
    localStorage.setItem('gridComponents', JSON.stringify(updatedComponents));
  };

  const handleButtonClick = () => {
    setClickCount(prev => prev + 1);
  };

  const handleLabelClick = () => {
    setLabelClickCount(prev => prev + 1);
  };

  const components: ComponentDisplay[] = [
    // Core Components
    { name: 'Welcome', path: '/src/components/Welcome.tsx', component: <Welcome /> },
    { name: 'YouAreOnTrack', path: '/src/components/YouAreOnTrack.tsx', component: <YouAreOnTrack /> },
    { name: 'PersonalizedLearning', path: '/src/components/PersonalizedLearning.tsx', component: <PersonalizedLearning /> },
    { name: 'ProgressTracker', path: '/src/components/ProgressTracker.tsx', component: <ProgressTracker /> },
    { name: 'CometProgress', path: '/src/components/CometProgress.tsx', 
      component: (
        <div className="w-full h-[120px] bg-[#020617] rounded-xl p-4 border border-white/10">
          <div className="relative h-full">
            <CometProgress progress={75} />
          </div>
        </div>
      )
    },
    
    // Progress Components
    { name: 'ThermometerProgress', path: '/src/components/ThermometerProgress.tsx', component: <ThermometerProgress progress={75} /> },
    { name: 'GreenProgressBubble', path: '/src/components/GreenProgressBubble.tsx', 
      component: <GreenProgressBubble progress={75} size="lg" label="Overall Progress" /> },
    { name: 'ProgressTrackerSection', path: '/src/components/ProgressTrackerSection.tsx', component: <ProgressTrackerSection /> },
    
    // Interactive Components
    { name: 'ExamCountdownBubble', path: '/src/components/ExamCountdownBubble.tsx', 
      component: <ExamCountdownBubble daysLeft={43} className="w-48 h-48" /> },
    { name: 'QuickActions', path: '/src/components/QuickActions.tsx', component: <QuickActions /> },
    { name: 'InteractiveGraph', path: '/src/components/InteractiveGraph.tsx', component: <InteractiveGraph /> },
    
    // Card Components
    { name: 'SpaceCard', path: '/src/components/SpaceCard.tsx', 
      component: (
        <SpaceCard title="Design Principles">
          <div className="space-y-4 text-white/70">
            <p>Explore the fundamental principles of design through our guides.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Hierarchy</h4>
                <p className="text-sm">Learn about visual hierarchy.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Balance</h4>
                <p className="text-sm">Master balanced layouts.</p>
              </div>
            </div>
          </div>
        </SpaceCard>
      )
    },
    { name: 'InviteCard', path: '/src/components/InviteCard.tsx', component: <InviteCard /> },
    { name: 'ScheduleCalendarLocation', path: '/src/components/ScheduleCalendarLocation.tsx', component: <ScheduleCalendarLocation /> },
    { name: 'VideoFormatDisplay', path: '/src/components/VideoFormatDisplay.tsx', component: <VideoFormatDisplay /> },
    
    // Green Style Components
    { name: 'Container', path: '/src/components/figmacomponentgreen/components/Container.tsx', component: <Container /> },
    { name: 'Interactive Card', path: '/src/components/figmacomponentgreen/components/CardBackground.tsx',
      component: (
        <CardBackground>
          <div className="flex flex-col justify-center items-center h-full text-white space-y-4">
            <h3 className="text-base font-bold">Interactive Content</h3>
            <p className="text-white/70 text-center max-w-md text-sm">
              This card features the same base green color with a bright blue outline.
            </p>
            <Button
              className="scale-[0.85] mt-4"
              icon={<Icon1 className="icon-instance-node" />}
              onClick={handleLabelClick}
              label="Click Me"
            />
          </div>
        </CardBackground>
      )
    },
    { name: 'Gradient Card', path: '/src/components/figmacomponentgreen/components/GradientCard.tsx',
      component: (
        <GradientCard>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <h3 className="text-xl font-bold text-white">Gradient Card with Animated Button</h3>
            <p className="text-white/70 text-center max-w-md">
              A beautiful gradient card with glowing effects and an animated button.
            </p>
            <AnimatedButton>
              Interact with Me
            </AnimatedButton>
          </div>
        </GradientCard>
      )
    },
    { name: 'Card Background', path: '/src/components/figmacomponentgreen/components/CardBg.tsx',
      component: (
        <CardBg
          className="transform scale-90"
          overlapGroupClassName=""
          overlapClassName=""
          topHighlightClassName=""
          topRightClassName=""
          rightHighlightClassName=""
          bottomLeftClassName=""
          bottomRightClassName=""
        />
      )
    },
    { name: 'CardBackground', path: '/src/components/figmacomponentgreen/components/CardBackground.tsx',
      component: (
        <CardBackground>
          <div className="flex flex-col justify-center items-center h-full text-white space-y-4">
            <h3 className="text-xl font-bold">Interactive Card</h3>
            <p className="text-white/70 text-center max-w-md">Beautiful card with blue outline effect.</p>
          </div>
        </CardBackground>
      )
    },
    { name: 'InviteCard', path: '/src/components/InviteCard.tsx', component: <InviteCard /> },
    { name: 'ProgressTrackerSection', path: '/src/components/ProgressTrackerSection.tsx', component: <ProgressTrackerSection /> },
    
    // Background Components
    { name: 'BlueSun', path: '/src/components/BlueSun.tsx',
      component: (
        <div className="relative w-full h-[400px] backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10">
          <BlueSun />
        </div>
      )
    },
    { name: 'DotSphere', path: '/src/components/DotSphere.tsx',
      component: (
        <div className="relative w-full aspect-square backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10">
          <div className="absolute inset-0 bg-blue-500/40 rounded-lg z-10" />
          <div className="absolute inset-0">
            <ErrorBoundary>
              <Suspense fallback={null}>
                <Canvas
                  gl={{ antialias: true }}
                  camera={{ position: [0, 0, 3], fov: 40 }}
                  style={{ background: 'transparent' }}
                >
                  <ambientLight intensity={0.8} />
                  <pointLight position={[10, 10, 10]} intensity={3} color="#00aaff" />
                  <pointLight position={[-10, -10, -10]} intensity={2.5} color="#0088ff" />
                  <pointLight position={[0, 0, 10]} intensity={2.5} color="#0066ff" />
                  <DotSphere />
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                  />
                </Canvas>
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      )
    }
  ];

  if (!isOpen) return null;
  // Organize components into categories
  const categories: ComponentCategory[] = [
    {
      name: "Core UI",
      components: [
        { name: 'BackgroundSection', path: '/src/components/BackgroundSection.tsx', 
          component: <BackgroundSection />, 
          category: 'Core UI' },
        { name: 'StudyHeader', path: '/src/components/StudyHeader.tsx', 
          component: <StudyHeader />, 
          category: 'Core UI' },
        { name: 'WelcomeBackJoey', path: '/src/components/WelcomeBackJoey.tsx', 
          component: <WelcomeBackJoey />, 
          category: 'Core UI' },
        { name: 'WelcomeBubble', path: '/src/components/WelcomeBubble.tsx', 
          component: <WelcomeBubble onStartJourney={() => console.log('Start journey')} />, 
          category: 'Core UI' },
        { name: 'WelcomeBubble2', path: '/src/components/WelcomeBubble2.tsx', 
          component: <WelcomeBubble2 onStartJourney={() => console.log('Start journey')} />, 
          category: 'Core UI' },
        { name: 'WelcomeCard2', path: '/src/components/WelcomeCard2.tsx', 
          component: <WelcomeCard2 />, 
          category: 'Core UI' },
        { name: 'SaturnLogoTitle2', path: '/src/components/SaturnLogoTitle2.tsx', component: <SaturnLogoTitle2 />, category: 'Core UI' },
        { name: 'SaturnLogoTitle', path: '/src/components/SaturnLogoTitle.tsx', component: <SaturnLogoTitle />, category: 'Core UI' },
        { name: 'Welcome', path: '/src/components/Welcome.tsx', component: <Welcome />, category: 'Core UI' },
        { name: 'YouAreOnTrack', path: '/src/components/YouAreOnTrack.tsx', component: <YouAreOnTrack />, category: 'Core UI' },
        { name: 'PersonalizedLearning', path: '/src/components/PersonalizedLearning.tsx', component: <PersonalizedLearning />, category: 'Core UI' },
        { name: 'QuickActions', path: '/src/components/QuickActions.tsx', component: <QuickActions />, category: 'Core UI' },
      ]
    },
    {
      name: "Progress Indicators",
      components: [
        { name: 'ProgressTracker', path: '/src/components/ProgressTracker.tsx', component: <ProgressTracker />, category: 'Progress' },
        { name: 'CometProgress', path: '/src/components/CometProgress.tsx', 
          component: (
            <div className="w-full h-[120px] bg-[#020617] rounded-xl p-4 border border-white/10">
              <div className="relative h-full">
                <CometProgress progress={75} />
              </div>
            </div>
          ), 
          category: 'Progress' 
        },
        { name: 'CometProgress2', path: '/src/components/CometProgress2.tsx', 
          component: (
            <div className="w-full h-[120px] bg-[#020617] rounded-xl p-4 border border-white/10">
              <div className="relative h-full">
                <CometProgress2 progress={75} />
              </div>
            </div>
          ), 
          category: 'Progress' 
        },
        { name: 'ThermometerProgress', path: '/src/components/ThermometerProgress.tsx', component: <ThermometerProgress progress={75} />, category: 'Progress' },
        { name: 'GreenProgressBubble', path: '/src/components/GreenProgressBubble.tsx', 
          component: <GreenProgressBubble progress={75} size="lg" label="Overall Progress" />, category: 'Progress' },
        { name: 'ProgressTrackerSection', path: '/src/components/ProgressTrackerSection.tsx', component: <ProgressTrackerSection />, category: 'Progress' },
      ]
    },
    {
      name: "Cards & Containers",
      components: [
        { name: 'SpaceCard', path: '/src/components/SpaceCard.tsx', 
          component: (
            <SpaceCard title="Design Principles">
              <div className="space-y-4 text-white/70">
                <p>Explore the fundamental principles of design through our guides.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">Hierarchy</h4>
                    <p className="text-sm">Learn about visual hierarchy.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Balance</h4>
                    <p className="text-sm">Master balanced layouts.</p>
                  </div>
                </div>
              </div>
            </SpaceCard>
          ),
          category: 'Cards'
        },
        { name: 'Container', path: '/src/components/figmacomponentgreen/components/Container.tsx', component: <Container />, category: 'Cards' },
        { name: 'CardBackground', path: '/src/components/figmacomponentgreen/components/CardBackground.tsx', component: <CardBackground />, category: 'Cards' },
        { name: 'CardBg', path: '/src/components/figmacomponentgreen/components/CardBg.tsx', component: <CardBg />, category: 'Cards' },
        { name: 'GradientCard', path: '/src/components/figmacomponentgreen/components/GradientCard/GradientCard.tsx', component: <GradientCard />, category: 'Cards' },
        { name: 'InviteCard', path: '/src/components/InviteCard.tsx', component: <InviteCard />, category: 'Cards' },
      ]
    },
    {
      name: "Interactive Elements",
      components: [
        { name: 'InfoBubble', path: '/src/components/InfoBubble.tsx', 
          component: (
            <div className="w-[500px]">
              <InfoBubble />
            </div>
          ), 
          category: 'Interactive' 
        },
        { name: 'ExamCountdownBubble', path: '/src/components/ExamCountdownBubble.tsx', 
          component: <ExamCountdownBubble daysLeft={43} className="w-48 h-48" />, category: 'Interactive' },
        { name: 'InteractiveGraph', path: '/src/components/InteractiveGraph.tsx', component: <InteractiveGraph />, category: 'Interactive' },
        { name: 'VideoFormatDisplay', path: '/src/components/VideoFormatDisplay.tsx', component: <VideoFormatDisplay />, category: 'Interactive' },
      ]
    },
    {
      name: "Visual Effects",
      components: [
        { name: 'WhiteLedBar', path: '/src/components/WhiteLedBar.tsx',
          component: (
            <div className="relative w-full h-[200px] backdrop-blur-xl bg-slate-950 rounded-2xl border border-white/10
                         flex items-center justify-center overflow-hidden">
              <WhiteLedBar />
            </div>
          ),
          category: 'Effects'
        },
        { name: 'DotSphere', path: '/src/components/DotSphere.tsx',
          component: (
            <div className="relative w-full aspect-square backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-[300px] max-h-[300px]">
                  <div className="absolute inset-0 bg-blue-500/40 rounded-lg z-10" />
                  <Canvas
                    gl={{ antialias: true }}
                    camera={{ position: [0, 0, 3], fov: 40 }}
                    style={{ background: 'transparent', width: '100%', height: '100%' }}
                  >
                    <ambientLight intensity={0.8} />
                    <pointLight position={[10, 10, 10]} intensity={3} color="#00aaff" />
                    <pointLight position={[-10, -10, -10]} intensity={2.5} color="#0088ff" />
                    <pointLight position={[0, 0, 10]} intensity={2.5} color="#0066ff" />
                    <DotSphere />
                    <OrbitControls
                      enableZoom={false}
                      enablePan={false}
                      autoRotate
                      autoRotateSpeed={1}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
          ),
          category: 'Effects'
        },
        { name: 'BlueSun', path: '/src/components/BlueSun.tsx',
          component: (
            <div className="relative w-full h-[400px] backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10">
              <BlueSun />
            </div>
          ),
          category: 'Effects'
        }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-[#020617]/90 via-[#1e3a8a]/90 to-[#020617]/90 backdrop-blur-sm"
        onClick={() => setIsOpen(false)} />

      {/* Content */}
      <div className="relative w-full max-w-[80vh] aspect-square backdrop-blur-xl rounded-2xl p-6
                   border border-[#0088ff]/20 space-y-6 animate-fade-in
                   bg-gradient-to-br from-[#0088ff]/20 via-[#0066ff]/15 to-[#0088ff]/20
                   shadow-[0_8px_32px_rgba(0,136,255,0.3)] overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-blue-400/20 transition-colors
                   hover:scale-110 active:scale-95"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-8">Gallery</h1>

        {/* Category Tabs */}
        <div className="flex gap-1.5 mb-4 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
              !selectedCategory
                ? "bg-[#0088ff]/20 text-[#0088ff] border border-[#0088ff]/30"
                : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
            )}
          >
            All Components
          </button>
          {categories.map(category => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                selectedCategory === category.name
                  ? "bg-[#0088ff]/20 text-[#0088ff] border border-[#0088ff]/30"
                  : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        {/* Component Grid */}
        <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[calc(100%-10rem)]">
          {/* Added Components */}
          {gridComponents.map((item, index) => (
            <div key={`added-${index}`} className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6 space-y-4
                                    hover:bg-white/10 transition-all duration-300 relative group">
              <button
                onClick={() => handleRemoveComponent(index)}
                className="absolute top-2 right-2 p-2 rounded-lg bg-red-500/20 border border-red-500/30
                         text-red-400 opacity-0 group-hover:opacity-100 transition-opacity
                         hover:bg-red-500/30"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
              </div>
              <div className="text-xs text-blue-200/80 font-mono mb-4">{item.path}</div>
              <div className="relative overflow-hidden rounded-lg transform hover:scale-[1.02] transition-transform">
                {renderComponent(item.type)}
              </div>
            </div>
          ))}

          {(selectedCategory 
            ? categories.find(cat => cat.name === selectedCategory)?.components
            : categories.flatMap(cat => cat.components)
          )?.map((item, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/5 rounded-xl border border-white/10 p-6 space-y-4
                                    hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
              </div>
              <div className="text-xs text-blue-200/80 font-mono mb-2 truncate">{item.path}</div>
              <div className="relative overflow-hidden rounded-lg transform hover:scale-[1.02] transition-transform">
                {item.component}
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <div className="mt-8 text-center border-t border-[#0088ff]/20 pt-4">
          <p className="text-white/60 text-sm">
            Click anywhere outside to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreenStyledPopup;