import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, History, Eye, ArrowRight, CheckCircle2, Package, Sparkles, Copy, Check } from 'lucide-react';
import Terminal from '../components/Terminal';

const Home: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm install -g autosnap-git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full text-emerald-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles size={14} className="animate-pulse" />
              <span>Version 1.0.1: Now with readable commit messages</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight">
                Git History on <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Autopilot.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                Automated Git snapshots that remove the hassle of repeated <code>git add .</code>, <code>git commit</code>, and writing commit messages by hand.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Link to="/docs" className="group bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center space-x-3 w-full sm:w-auto shadow-xl shadow-emerald-500/20">
                <span>Start Snapshoting</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://github.com/Haryomidey/autosnap-git" className="bg-slate-900 border border-slate-800 hover:bg-slate-800 px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center space-x-3 w-full sm:w-auto">
                <Github size={20} />
                <span>Star on GitHub</span>
              </a>
            </div>

            {/* Terminal Preview */}
            <div className="w-full max-w-3xl mt-12 transform hover:scale-[1.02] transition-transform duration-500">
              <Terminal 
                commands={[
                  { cmd: 'npm install -g autosnap-git' },
                  { 
                    cmd: 'autosnap-git --watch',
                    output: [
                      'Watcher active: monitoring src/',
                      'Event detected: App.tsx modified',
                      'Debouncing (5s)...',
                      'Snapshot created at 2026-03-29 22:10',
                      'Commit: [UPDATE]: update cli and docs'
                    ]
                  }
                ]}
                title="autosnap-git --watch"
                className="shadow-2xl shadow-emerald-500/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Built for High-Velocity Devs</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">Focus on the code. Let Autosnap handle the timeline.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="text-emerald-500" />,
              title: "Instant Snapshots",
              desc: "Automatically stages and commits real changes so you do not have to keep doing the same Git steps by hand."
            },
            {
              icon: <Eye className="text-blue-500" />,
              title: "Watch Mode",
              desc: "Intelligent debouncing and recursion protection. Set it and forget it."
            },
            {
              icon: <Shield className="text-red-500" />,
              title: "Safety First",
              desc: "Never accidentally commit .env files or secret keys. Built-in blocking logic."
            },
            {
              icon: <History className="text-purple-500" />,
              title: "Friendly History",
              desc: "Readable commit subjects based on changed files and edit size, not timestamp-heavy snapshots."
            },
            {
              icon: <CheckCircle2 className="text-emerald-500" />,
              title: "Repo Auto-Init",
              desc: "Don't have git set up? Autosnap will initialize it for you instantly."
            },
            {
              icon: <Package className="text-amber-500" />,
              title: "Global CLI",
              desc: "Ready for global install or npm link. Works in any directory effortlessly."
            }
          ].map((feature, i) => (
            <div key={i} className="p-10 bg-slate-900/40 border border-slate-800/50 rounded-3xl hover:border-emerald-500/30 transition-all hover:bg-slate-900/60 group">
              <div className="bg-slate-950 w-14 h-14 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof / Usage Section */}
      <section className="bg-slate-900/20 py-32 border-y border-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Automate without fear.</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Autosnap Git is built for the moments when you want to save progress but do not want to break focus for <code>git add .</code>, <code>git commit</code>, and message-writing. It respects your <code>.gitignore</code> and explicitly blocks sensitive patterns to ensure your secrets stay secret.
              </p>
              <ul className="space-y-5">
                {[
                  "Blocks .env files automatically",
                  "Prevents private key commits (*.pem, *.key)",
                  "Warns on 'secret' or 'credentials' in filenames",
                  "Debounced watch mode avoids recursive commit loops"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4 text-slate-300 font-medium">
                    <div className="bg-emerald-500/10 p-1 rounded-full">
                      <CheckCircle2 size={20} className="text-emerald-500" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
              <Terminal 
                commands={[
                  { cmd: 'autosnap-git status', output: 'Status: 2 files changed, 1 file deleted' },
                  { cmd: 'autosnap-git diff --stat', output: ['src/App.tsx | 12 +++--', 'src/utils.ts |  4 +--'] },
                  { cmd: 'autosnap-git log -n 1', output: 'Commit: c8a3b2f - [UPDATE]: update cli and docs' }
                ]}
                title="CLI Explorer"
                className="relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned CTA Section */}
      <section className="container mx-auto px-6">
        <div className="relative group overflow-hidden rounded-[3rem]">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-slate-900 border border-slate-800 transition-colors group-hover:border-emerald-500/30"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[100px] -mr-40 -mt-40 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] -ml-20 -mb-20 rounded-full"></div>

          <div className="relative z-10 px-8 py-20 md:p-24 flex flex-col items-center text-center space-y-12">
            <div className="space-y-6 max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                Ready to never lose <br />
                <span className="text-emerald-500">code again?</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto">
                Join thousands of developers who have replaced manual commits with the power of Autosnap.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-8 w-full">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/docs" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-12 py-5 rounded-2xl font-black transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 text-lg">
                  Get Started Free
                </Link>
                <div className="bg-slate-950 border border-slate-800 p-1 rounded-2xl flex items-center pr-4">
                  <code className="bg-slate-900 text-emerald-400 font-mono px-6 py-4 rounded-xl border border-slate-800/50 mr-4 select-all">
                    npm install -g autosnap-git
                  </code>
                  <button 
                    onClick={handleCopyInstall}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all ${copied ? 'text-emerald-400 bg-emerald-500/10' : 'text-slate-500 hover:text-white hover:bg-slate-800'}`}
                  >
                    {copied ? (
                      <>
                        <Check size={18} />
                        <span className="text-xs font-bold uppercase tracking-wider">Copied</span>
                      </>
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-slate-500 text-sm font-bold uppercase tracking-widest">
                <span className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Open Source</span>
                </span>
                <span className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Lightweight</span>
                </span>
                <span className="flex items-center space-x-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Secure</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal Github icon helper
const Github: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default Home;
