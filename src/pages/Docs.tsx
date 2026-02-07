import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Terminal from '../components/Terminal';
import { ChevronRight, ExternalLink } from 'lucide-react';

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to === '/docs' && location.pathname === '/docs/');
  return (
    <Link 
      to={to} 
      className={`block px-4 py-2 rounded-lg transition-colors ${isActive ? 'bg-emerald-500/10 text-emerald-400 font-semibold' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}
    >
      {children}
    </Link>
  );
};

const Introduction = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="space-y-2">
      <h1 className="text-4xl font-bold text-white">Introduction</h1>
      <p className="text-slate-400 text-lg">Automate Git snapshots and keep a clean view of your commit history.</p>
    </div>
    <div className="prose prose-invert max-w-none">
      <p>
        <strong>Autosnap Git</strong> is a production-ready CLI that removes the friction from Git. 
        It's designed for developers who want to maintain a frequent commit history without the cognitive load of manual <code>git add</code> and <code>git commit</code> cycles.
      </p>
      
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Quick Install</h2>
      <Terminal commands={[{ cmd: 'npm install -g autosnap-git' }]} />
      
      <p className="mt-6">For local development and testing features:</p>
      <Terminal commands={[{ cmd: 'npm link' }]} />

      <h2 className="text-2xl font-bold text-white mt-12 mb-4">Core Philosophy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
          <h4 className="font-bold text-emerald-400 mb-2">Automated but Selective</h4>
          <p className="text-sm text-slate-400">Snapshots only occur when real file changes are detected, keeping your history noise-free.</p>
        </div>
        <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
          <h4 className="font-bold text-emerald-400 mb-2">Safety by Default</h4>
          <p className="text-sm text-slate-400">Integrated guards prevent accidental leaking of credentials or environment variables.</p>
        </div>
      </div>
    </div>
  </div>
);

const Usage = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="space-y-2">
      <h1 className="text-4xl font-bold text-white">Usage & CLI Reference</h1>
      <p className="text-slate-400 text-lg">Every command you need to master your history.</p>
    </div>
    
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">Basic Commands</h3>
      <Terminal commands={[
        { cmd: 'autosnap-git', output: '# creates a snapshot if changes exist' },
        { cmd: 'autosnap-git --dry-run', output: '# preview without committing' },
        { cmd: 'autosnap-git --push', output: '# commit + push to remote' }
      ]} />
    </div>

    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">Watch Mode</h3>
      <p className="text-slate-400">Watch mode tracks your file system and commits automatically after a period of inactivity.</p>
      <Terminal commands={[
        { cmd: 'autosnap-git --watch', output: '# 5s default debounce' },
        { cmd: 'autosnap-git --watch --interval 300', output: '# 5 minute interval' }
      ]} />
    </div>

    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">History & Inspection</h3>
      <Terminal commands={[
        { cmd: 'autosnap-git log', output: 'Shows recent activity summary' },
        { cmd: 'autosnap-git log -n 10', output: 'Last 10 commits' },
        { cmd: 'autosnap-git diff --stat', output: 'Summary of uncommitted changes' },
        { cmd: 'autosnap-git status', output: 'Clean view of repository status' }
      ]} />
    </div>
  </div>
);

const Safety = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="space-y-2">
      <h1 className="text-4xl font-bold text-white">Security & Safety</h1>
      <p className="text-slate-400 text-lg">Protecting your sensitive data automatically.</p>
    </div>
    
    <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl text-slate-300">
      <p className="font-semibold text-red-400 mb-2">Autosnap refuses to commit the following patterns:</p>
      <ul className="list-disc list-inside space-y-2 text-sm">
        <li><code>.env</code> files</li>
        <li>Private keys (<code>*.pem</code>, <code>*.key</code>, <code>id_rsa</code>)</li>
        <li>Files with <code>secret</code> in the name</li>
        <li>Files with <code>credentials</code> in the name</li>
      </ul>
    </div>

    <p className="text-slate-400 leading-relaxed">
      In addition to hardcoded rules, Autosnap Git respects your <code>.gitignore</code> rules by using the standard git staging engine. If a file is ignored by Git, it will never be included in an Autosnap snapshot.
    </p>

    <h3 className="text-xl font-bold text-white">First Run Warning</h3>
    <p className="text-slate-400">
      On the very first run in a new repository, Autosnap prints a detailed warning. This gives you a chance to verify your <code>.gitignore</code> is correctly configured before any automation begins.
    </p>
  </div>
);

const Faq = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="space-y-2">
      <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1>
      <p className="text-slate-400 text-lg">Common questions and troubleshooting tips.</p>
    </div>
    
    <div className="space-y-6">
      {[
        {
          q: "Why didn't Autosnap create a commit?",
          a: "Either no changes were detected in the tracked files, or sensitive files were found and the process was blocked for safety."
        },
        {
          q: "Does Autosnap respect .gitignore?",
          a: "Yes. It uses 'git add .' internally, which adheres to all standard Git ignore rules."
        },
        {
          q: "How do I stop watch mode?",
          a: "Simply press Ctrl+C in your terminal to gracefully terminate the watcher."
        },
        {
          q: "Can I use it with existing repos?",
          a: "Absolutely. Autosnap works with any directory. If it's not already a Git repo, it will offer to initialize it for you."
        }
      ].map((item, i) => (
        <div key={i} className="p-6 bg-slate-900 rounded-xl border border-slate-800">
          <h4 className="font-bold text-white mb-2">{item.q}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
);

const Docs: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Docs Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <nav className="sticky top-24 space-y-1">
            <h5 className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Getting Started</h5>
            <NavItem to="/docs">Introduction</NavItem>
            <NavItem to="/docs/usage">Usage</NavItem>
            
            <h5 className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 mt-8 mb-2">Reliability</h5>
            <NavItem to="/docs/safety">Safety & Security</NavItem>
            <NavItem to="/docs/watch">Watch Mode</NavItem>
            
            <h5 className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 mt-8 mb-2">Reference</h5>
            <NavItem to="/docs/faq">FAQ</NavItem>
            <a href="https://github.com/Haryomidey/autosnap-git" target="_blank" className="flex items-center space-x-2 px-4 py-2 text-slate-400 hover:text-white transition-colors">
              <span>GitHub</span>
              <ExternalLink size={14} />
            </a>
          </nav>
        </aside>

        {/* Docs Content */}
        <div className="flex-grow max-w-4xl">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="usage" element={<Usage />} />
            <Route path="safety" element={<Safety />} />
            <Route path="faq" element={<Faq />} />
            <Route path="watch" element={<Usage />} /> {/* Reusing for simplicity */}
          </Routes>

          {/* Pagination */}
          <div className="mt-20 pt-8 border-t border-slate-900 flex justify-between">
            <Link to="/" className="text-slate-500 hover:text-emerald-400 flex items-center space-x-1">
              <ChevronRight className="rotate-180" size={18} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;