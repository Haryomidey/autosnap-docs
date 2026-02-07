import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Menu, X, Camera } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-emerald-500 p-1.5 rounded-lg transform group-hover:rotate-12 transition-transform">
              <Camera size={20} className="text-slate-950" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Autosnap <span className="text-emerald-500">Git</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/docs" className="text-sm font-medium hover:text-emerald-400 transition-colors">Documentation</Link>
            <Link to="/docs/usage" className="text-sm font-medium hover:text-emerald-400 transition-colors">Usage</Link>
            <Link to="/docs/faq" className="text-sm font-medium hover:text-emerald-400 transition-colors">FAQ</Link>
            <a href="https://github.com/Haryomidey/autosnap-git" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-sm font-medium hover:text-emerald-400 transition-colors">
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-200">
            <Link to="/docs" className="text-lg font-medium">Documentation</Link>
            <Link to="/docs/usage" className="text-lg font-medium">Usage</Link>
            <Link to="/docs/faq" className="text-lg font-medium">FAQ</Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-lg font-medium">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Camera size={20} className="text-emerald-500" />
                <span className="text-lg font-bold text-white">Autosnap Git</span>
              </div>
              <p className="text-slate-400 text-sm">
                The developer's safety net. Automate your git snapshots and never lose a line of code again.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/docs" className="hover:text-emerald-400">Features</Link></li>
                <li><Link to="/docs/usage" className="hover:text-emerald-400">CLI Reference</Link></li>
                <li><Link to="/docs/safety" className="hover:text-emerald-400">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link to="/docs" className="hover:text-emerald-400">Installation</Link></li>
                <li><Link to="/docs/faq" className="hover:text-emerald-400">FAQ</Link></li>
                <li><a href="#" className="hover:text-emerald-400">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-emerald-400">GitHub Discussion</a></li>
                <li><a href="#" className="hover:text-emerald-400">Issues</a></li>
                <li><a href="#" className="hover:text-emerald-400">Contribute</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
            <p>&copy; {new Date().getFullYear()} Autosnap Git. MIT Licensed.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-400">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;