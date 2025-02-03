import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DevModeProvider } from './contexts/DevModeContext';
import { FlashcardProvider } from './contexts/FlashcardContext';
import TestsPage from './pages/TestsPage';
import Flashcards2Page from './pages/Flashcards2Page';
import GreenStyledPopup from './components/GreenStyledPopup';
import PracticePage from './pages/PracticePage';
import PracticePage2 from './pages/PracticePage2';
import StudyPage3 from './pages/StudyPage3';
import SignInPage from './pages/SignInPage';
import ExamRegistrationPage from './pages/ExamRegistrationPage';
import GreenComponentsPage from './pages/GreenComponentsPage';
import LandingPage1 from './pages/LandingPage1';
import QuadraticEquationsPage from './pages/QuadraticEquationsPage';
import OptimizedQuadraticPage from './pages/optimized-quadratic-page';
import DailyChallengePage from './pages/DailyChallengePage';
import TestSelectionPage from './pages/TestSelectionPage';
import ProgressPage from './pages/ProgressPage';
import GreenProgressDemo from './components/GreenProgressDemo';
import StudyStreakDetailsPage from './pages/StudyStreakDetailsPage';
import TestViewer from './pages/TestViewer';

function App() {
  return (
    <Router>
      <AuthProvider>
        <DevModeProvider>
          <FlashcardProvider>
            <Routes>
                <Route path="/" element={<LandingPage1 />} />
                <Route path="/daily-challenge" element={<DailyChallengePage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/register-exam" element={<ExamRegistrationPage />} />
                <Route path="/study3" element={<StudyPage3 />} />
                <Route path="/topics/quadratic-equations" element={<QuadraticEquationsPage />} />
                <Route path="/optimized-quadratic-page" element={<OptimizedQuadraticPage />} />
                <Route path="/practice" element={<PracticePage />} />
                <Route path="/practice/flashcards2" element={<Flashcards2Page />} />
                <Route path="/tests" element={<TestSelectionPage />} />
                <Route path="/tests/viewer" element={<TestViewer />} />
                <Route path="/progress" element={<ProgressPage />} />
                <Route path="/green-components" element={<GreenComponentsPage />} />
                <Route path="/progress-demo" element={<GreenProgressDemo />} />
                <Route path="/study-streak-details" element={<StudyStreakDetailsPage />} />
              </Routes>
          </FlashcardProvider>
        </DevModeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;