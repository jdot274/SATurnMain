@@ .. @@
 import React, { useState } from 'react';
 import { useNavigate, useLocation } from 'react-router-dom';
 import { ChevronLeft, ChevronRight, Undo2, Check, X, Sparkles } from 'lucide-react';
-import { useDevMode } from '../contexts/DevModeContext';
 import EditableText from '../components/EditableText';

@@ .. @@
 const FlashcardPage: React.FC = () => {
   const navigate = useNavigate();
   const location = useLocation();
-  const { isDevMode, toggleDevMode } = useDevMode();
   const { title, color } = location.state || {};