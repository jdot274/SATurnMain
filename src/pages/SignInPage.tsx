import React from 'react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import PageLogo from '../components/PageLogo';
import SignInForm from '../components/SignInForm';

const SignInPage = () => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <AnimatedBackground />
      <PageLogo />

      <div className="flex-1 flex items-center justify-center px-4">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;