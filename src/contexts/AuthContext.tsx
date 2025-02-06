import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isSignedIn: boolean;
  userName: string | null;
  signIn: (name: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  const signIn = (name: string) => {
    setIsSignedIn(true);
    setUserName(name);
  };

  const signOut = () => {
    setIsSignedIn(false);
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, userName, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}