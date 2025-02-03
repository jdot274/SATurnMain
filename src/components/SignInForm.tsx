import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Facebook, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const { signIn } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn('Joey');
    navigate(-1);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10
                    shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        {/* Form Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            {isSignIn ? 'Welcome back!' : 'Create your account'}
          </h1>
          <p className="text-white/60">
            {isSignIn 
              ? 'Sign in to continue your SAT prep journey'
              : 'Start your SAT prep journey today'}
          </p>
        </div>

        {/* Social Sign In */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                         bg-white/5 border border-white/10 text-white/90
                         hover:bg-white/10 transition-all duration-300">
            <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
              />
            </svg>
            <span className="text-sm font-medium">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl
                         bg-white/5 border border-white/10 text-white/90
                         hover:bg-white/10 transition-all duration-300">
            <Facebook className="w-5 h-5" />
            <span className="text-sm font-medium">Facebook</span>
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-white/60 bg-[#0f172a]">Or continue with</span>
          </div>
        </div>

        {/* Sign In Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-2.5
                         text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50
                         transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-2.5
                         text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50
                         transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {!isSignIn && (
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-10 py-2.5
                           text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50
                           transition-colors"
                />
              </div>
            </div>
          )}

          {isSignIn && (
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-white/20 bg-white/5 text-blue-500 focus:ring-0 focus:ring-offset-0"
                />
                <label htmlFor="remember" className="ml-2 text-white/60">Remember me</label>
              </div>
              <button type="button" className="text-blue-400 hover:text-blue-300">
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white
                     rounded-xl px-4 py-2.5 font-medium hover:from-blue-500 hover:to-blue-300
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
                     focus:ring-offset-[#0f172a] transition-all duration-300
                     flex items-center justify-center gap-2 group"
          >
            <span>{isSignIn ? 'Sign in' : 'Create account'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="mt-6 text-center text-white/60">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-blue-400 hover:text-blue-300 font-medium"
          >
            {isSignIn ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;