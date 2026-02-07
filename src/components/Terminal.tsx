import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface TerminalProps {
  commands: { cmd: string; output?: string | string[] }[];
  title?: string;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ commands, title = "bash", className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = commands.map(c => c.cmd).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-[#0d1117] rounded-xl border border-slate-800 overflow-hidden terminal-glow ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900/50 border-b border-slate-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
        </div>
        <div className="text-xs text-slate-500 font-mono select-none">
          {title}
        </div>
        <button 
          onClick={handleCopy}
          className="text-slate-500 hover:text-emerald-400 transition-colors p-1 rounded-md hover:bg-slate-800"
          title="Copy commands"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      </div>
      
      {/* Content */}
      <div className="p-5 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto whitespace-nowrap scrollbar-hide">
        {commands.map((item, idx) => (
          <div key={idx} className="mb-4 last:mb-0">
            <div className="flex items-start">
              <span className="text-emerald-500 mr-2">$</span>
              <span className="text-slate-100">{item.cmd}</span>
            </div>
            {item.output && (
              <div className="mt-2 text-slate-400">
                {Array.isArray(item.output) ? (
                  item.output.map((line, lidx) => (
                    <div key={lidx}>{line}</div>
                  ))
                ) : (
                  <div>{item.output}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;