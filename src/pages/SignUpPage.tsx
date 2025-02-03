import React, { useState } from 'react';
import { Apple, Facebook } from 'lucide-react';
import PageLogo from '../components/PageLogo';
import { Stars } from '../components/stars';

const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 
                    flex flex-col relative overflow-hidden">
      <PageLogo />
      
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Stars />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-40 w-16 h-16 animate-float">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-cyan-200 rounded-lg 
                       transform rotate-45 opacity-80 blur-sm" />
        </div>
        <div className="absolute top-60 right-60 w-12 h-12 animate-float-delayed">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-cyan-200 rounded-lg 
                       transform rotate-45 opacity-80 blur-sm" />
        </div>
      </div>

      <main className="flex-1 flex items-center justify-center relative z-10 p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-200 
                           rounded-2xl blur-lg opacity-80" />
              <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 to-cyan-200 
                           rounded-2xl flex items-center justify-center">
                <span className="text-3xl">✧</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Welcome to Nixon✨!</h1>
            <p className="text-white/60 text-sm">
              Credentials are only used to authenticate in ProfHub. All saved data will be stored in your database.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Emily"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3
                         text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50"
              />
              <input
                type="text"
                placeholder="Jhonson"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3
                         text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50"
              />
            </div>

            <input
              type="email"
              placeholder="emily@gmail.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                       text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                         text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-500/50"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <svg
                  className="w-5 h-5 text-white/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={showPassword 
                      ? "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" 
                      : "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    }
                  />
                </svg>
              </button>
            </div>

            <div className="relative">
              <select
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                         text-white/60 focus:outline-none focus:border-cyan-500/50 appearance-none"
              >
                <option value="">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-white/20 bg-white/5 text-cyan-500 
                         focus:ring-0 focus:ring-offset-0"
              />
              <label htmlFor="terms" className="text-sm text-white/60">
                I agree to the <span className="text-purple-400">Terms of service</span> and{' '}
                <span className="text-purple-400">Privacy</span> policies of ProofHub Corporation
              </label>
            </div>

            <button
              className="w-full py-3 rounded-xl font-medium transition-all duration-300
                       bg-gradient-to-r from-purple-500 to-purple-400 text-white
                       hover:from-purple-400 hover:to-purple-300
                       focus:outline-none focus:ring-2 focus:ring-purple-500/50
                       shadow-lg shadow-purple-500/30"
            >
              SIGN UP
            </button>

            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Apple className="w-5 h-5 text-white/60" />
              </button>
              <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  />
                </svg>
              </button>
              <button className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5 text-white/60" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;