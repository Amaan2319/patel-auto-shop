import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { adminLogin } from '@/lib/adminAuth';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await adminLogin(email, password);
      navigate('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
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
        <p className="text-center text-gray-400 mb-8">Admin Portal</p>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-sm mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
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
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-brand-orange hover:bg-brand-orange-hover text-black font-heading font-extrabold text-xs tracking-widest py-3 uppercase rounded-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">
          Don't have an account?{' '}
          <Link to="/admin/signup" className="text-brand-orange hover:text-brand-orange-hover transition-colors">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
