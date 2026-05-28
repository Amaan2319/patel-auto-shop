import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function AdminSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully! Please login.');
      navigate('/admin/login');
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Email already in use. Please login instead.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address');
      } else if (err.code === 'auth/weak-password') {
        setError('Password is too weak. Use at least 6 characters.');
      } else {
        setError(err.message || 'Signup failed');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-dark-card border border-white/10 rounded-lg p-8 shadow-xl">
        <h1 className="text-3xl font-black font-heading text-white mb-2 text-center">
          PATEL<span className="text-brand-orange">.</span>
        </h1>
        <p className="text-center text-gray-400 mb-8">Admin Sign Up</p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-sm mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold font-mono tracking-widest text-gray-400 mb-2">
              EMAIL
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@patel.com"
              className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold font-mono tracking-widest text-gray-400 mb-2">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-colors"
              required
            />
            <p className="text-xs text-gray-500 mt-1">At least 6 characters</p>
          </div>

          <div>
            <label className="block text-xs font-semibold font-mono tracking-widest text-gray-400 mb-2">
              CONFIRM PASSWORD
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-dark-bg border border-white/10 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-orange hover:bg-brand-orange-hover text-black font-heading font-extrabold text-xs tracking-widest py-3 uppercase rounded-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">
          Already have an account?{' '}
          <Link to="/admin/login" className="text-brand-orange hover:text-brand-orange-hover transition-colors">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
