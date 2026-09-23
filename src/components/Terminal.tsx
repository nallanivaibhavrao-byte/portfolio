import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Terminal as TerminalIcon,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import {
  playTerminalOpen,
  playTerminalClose,
  playKeyTick,
  playSuccess,
  playError,
  playClick,
} from '@/hooks/useSoundEffects';

interface CommandOutput {
  id: number;
  type: 'command' | 'response' | 'error';
  content: React.ReactNode;
}

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 0,
      type: 'response',
      content: (
        <div className="mb-2 space-y-1">
          <p className="text-[#F5D77F] font-bold">
            ⚡ Welcome to Vaibhav Rao Nallani's Terminal v1.0.0
          </p>
          <p className="text-[#9CA3AF]">
            Engineering Student • Artificial Intelligence (KITS Warangal)
          </p>
          <p className="text-xs text-[#D1D5DB]">
            Type <span className="text-[#F5D77F] font-semibold underline">help</span> to view available commands, or type any question!
          </p>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => {
          const next = !prev;
          if (next) playTerminalOpen();
          else playTerminalClose();
          return next;
        });
      }
      if (e.key === 'Escape' && isOpen) {
        playTerminalClose();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const getCommandResponse = (cmd: string): React.ReactNode | null => {
    switch (cmd.toLowerCase().trim()) {
      case 'help':
        return (
          <div className="grid grid-cols-[120px_1fr] gap-y-1.5 gap-x-2 text-xs">
            <span className="text-[#F5D77F] font-semibold">about</span>
            <span>Career objective and introduction</span>
            <span className="text-[#F5D77F] font-semibold">education</span>
            <span>Academic background (KITS, Bansal, Tejaswi)</span>
            <span className="text-[#F5D77F] font-semibold">skills</span>
            <span>Technical skills (C, Java, OOP concepts)</span>
            <span className="text-[#F5D77F] font-semibold">projects</span>
            <span>Projects & simulation systems</span>
            <span className="text-[#F5D77F] font-semibold">certifications</span>
            <span>Workshops & certified credentials</span>
            <span className="text-[#F5D77F] font-semibold">contact</span>
            <span>Email and LinkedIn connection details</span>
            <span className="text-[#F5D77F] font-semibold">clear</span>
            <span>Clear the terminal history</span>
            <span className="text-[#F5D77F] font-semibold">exit</span>
            <span>Close terminal assistant</span>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-1 text-xs leading-relaxed">
            <p>
              <strong className="text-[#F5D77F]">Vaibhav Rao Nallani</strong> is an Engineering Student specializing in Artificial Intelligence (Class of 2024–2028) at Kakatiya Institute of Technology and Science (KITS).
            </p>
            <p className="text-[#D1D5DB]">
              <span className="text-[#D4AF37] font-semibold">Objective:</span> To secure a challenging position in Computer Science, AI, and Machine Learning where technical knowledge, programming skills, and problem-solving abilities can contribute to innovative projects.
            </p>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-2 text-xs">
            <div>
              <p className="text-[#F5D77F] font-bold">1. Under Graduation (2024–2028)</p>
              <p>Kakatiya Institute of Technology and Science (KITS) — CGPA: 7.1</p>
              <p className="text-[#9CA3AF]">Branch: Artificial Intelligence / Computer Science</p>
            </div>
            <div>
              <p className="text-[#F5D77F] font-bold">2. Intermediate Secondary Education (2022–2024)</p>
              <p>Bansal Junior College — 78.3%</p>
            </div>
            <div>
              <p className="text-[#F5D77F] font-bold">3. SSC (10th Board) (2022)</p>
              <p>Tejaswi High School — CGPA: 9.2</p>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-1.5 text-xs">
            <p className="text-[#F5D77F] font-bold">Core Programming & Paradigms:</p>
            <p>• <span className="text-white font-semibold">C:</span> Procedural programming, pointers, memory concepts, algorithm implementation</p>
            <p>• <span className="text-white font-semibold">Java:</span> Object-oriented application logic, class design, collections</p>
            <p>• <span className="text-white font-semibold">OOP Concepts:</span> Encapsulation, Inheritance, Polymorphism, Abstraction</p>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-2 text-xs">
            <div>
              <p className="text-[#F5D77F] font-bold">1. Virtual Portfolio Simulation</p>
              <p className="text-[#D1D5DB]">Dynamic tool to model investment asset allocations and analyze portfolio risk/returns in real time.</p>
            </div>
            <div>
              <p className="text-[#F5D77F] font-bold">2. Restaurant Management System</p>
              <p className="text-[#D1D5DB]">Application streamlining table bookings, digital order management, inventory control, and automated billing.</p>
            </div>
            <div>
              <p className="text-[#F5D77F] font-bold">3. Research on Stock Market</p>
              <p className="text-[#D1D5DB]">Analytical research study applying quantitative models and historical data to identify equity trends.</p>
            </div>
          </div>
        );

      case 'certifications':
        return (
          <div className="space-y-1.5 text-xs">
            <p>• <strong className="text-[#F5D77F]">UI/UX Workshop:</strong> Design thinking, wireframing, interface usability</p>
            <p>• <strong className="text-[#F5D77F]">Stock Market Basics:</strong> Equity analysis, valuation, market indicators</p>
            <p>• <strong className="text-[#F5D77F]">Digital Marketing:</strong> Search engine optimization, brand strategy, online analytics</p>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-1.5 text-xs">
            <p>
              ✉️ <span className="text-[#F5D77F] font-semibold">Email:</span>{' '}
              <a href="mailto:nallanivaibhavrao@gmail.com" className="underline hover:text-white">
                nallanivaibhavrao@gmail.com
              </a>
            </p>
            <p>
              🔗 <span className="text-[#F5D77F] font-semibold">LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/vaibhav-rao-nallani"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                linkedin.com/in/vaibhav-rao-nallani
              </a>
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  const processQuery = (inputStr: string): React.ReactNode | null => {
    const lower = inputStr.toLowerCase();
    if (lower.match(/^(hi|hello|hey|greetings|hola)/)) {
      return "Hello! I am Vaibhav's portfolio assistant. Type 'help' to see what I can do, or ask me about Vaibhav's education, skills, projects, or contact info!";
    }
    if (lower.match(/(who|about|bio|profile|vaibhav|objective)/)) {
      return getCommandResponse('about');
    }
    if (lower.match(/(education|college|school|cgpa|score|marks|grade|kits)/)) {
      return getCommandResponse('education');
    }
    if (lower.match(/(skill|tech|stack|java|c|oop|language)/)) {
      return getCommandResponse('skills');
    }
    if (lower.match(/(project|portfolio|simulation|restaurant|stock|research)/)) {
      return getCommandResponse('projects');
    }
    if (lower.match(/(cert|workshop|ui|ux|marketing)/)) {
      return getCommandResponse('certifications');
    }
    if (lower.match(/(contact|email|linkedin|reach|hire)/)) {
      return getCommandResponse('contact');
    }
    return null;
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newHistory: CommandOutput[] = [
      ...history,
      {
        id: Date.now(),
        type: 'command',
        content: `guest@vaibhav-portfolio:~$ ${cmd}`,
      },
    ];

    if (trimmed.toLowerCase() === 'clear') {
      playClick();
      setHistory([]);
      return;
    }
    if (trimmed.toLowerCase() === 'exit') {
      playTerminalClose();
      setIsOpen(false);
      return;
    }

    let response = getCommandResponse(trimmed) || processQuery(trimmed);

    if (!response) {
      playError();
      response = (
        <span className="text-red-400">
          Command '{trimmed}' not recognized. Type <span className="text-[#F5D77F] font-bold underline">help</span> to view available commands.
        </span>
      );
    } else {
      playSuccess();
    }

    newHistory.push({
      id: Date.now() + 1,
      type: 'response',
      content: response,
    });

    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  // Floating trigger button when closed
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <button
          onClick={() => {
            playTerminalOpen();
            setIsOpen(true);
          }}
          onTouchStart={playTerminalOpen}
          className="group relative flex items-center gap-2 px-4 py-3 bg-[#0E0E12] border-2 border-[#D4AF37] text-[#F5D77F] font-mono text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#D4AF37] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#D4AF37] hover:text-[#070707] transition-all duration-300 active:scale-95"
          aria-label="Open Interactive CLI Terminal"
        >
          <TerminalIcon className="w-4 h-4 text-[#D4AF37] group-hover:text-[#070707]" />
          <span>Terminal</span>
          <span className="hidden md:inline-block px-1.5 py-0.5 text-[9px] bg-[#1A1A20] text-[#9CA3AF] border border-[#D4AF37]/30 group-hover:bg-[#070707] group-hover:text-[#F5D77F] rounded">
            Ctrl+K
          </span>
        </button>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`bg-[#0A0A0E] border-2 border-[#D4AF37] shadow-[8px_8px_0px_0px_rgba(212,175,55,0.4)] w-full transition-all duration-300 flex flex-col font-mono text-sm ${
          isMaximized ? 'h-[95vh] w-[95vw]' : 'max-w-2xl h-[560px]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#D4AF37]/30 bg-[#121217]">
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 cursor-pointer"
              title="Close terminal"
              onClick={() => {
                playTerminalClose();
                setIsOpen(false);
              }}
            />
            <div
              className="w-3 h-3 rounded-full bg-yellow-500 hover:opacity-80 cursor-pointer"
              title="Maximize / Restore"
              onClick={() => setIsMaximized(!isMaximized)}
            />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-[#D4AF37] text-xs font-semibold">
              vaibhav@ai-terminal:~
            </span>
          </div>

          <div className="flex items-center gap-3 text-[#9CA3AF]">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="hover:text-[#F5D77F] p-1"
              aria-label={isMaximized ? 'Minimize terminal' : 'Maximize terminal'}
            >
              {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
            <button
              onClick={() => {
                playTerminalClose();
                setIsOpen(false);
              }}
              className="hover:text-red-400 p-1"
              aria-label="Close terminal"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Terminal Scroll Content */}
        <div
          className="flex-1 overflow-y-auto p-4 text-[#F3F4F6] space-y-3"
          ref={scrollRef}
          onClick={handleTerminalClick}
        >
          {history.map((entry) => (
            <div
              key={entry.id}
              className={
                entry.type === 'command'
                  ? 'text-[#F5D77F] font-bold border-l-2 border-[#D4AF37] pl-2 py-0.5'
                  : 'text-[#E5E7EB] pl-2'
              }
            >
              {entry.content}
            </div>
          ))}

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pl-2 pt-2 border-t border-[#D4AF37]/20">
            <span className="text-[#D4AF37] font-bold shrink-0">
              guest@portfolio:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                playKeyTick();
              }}
              className="flex-1 bg-transparent border-none outline-none text-[#F3F4F6] focus:ring-0 p-0 font-mono text-sm"
              autoFocus
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal command input"
              placeholder="type 'help'..."
            />
          </form>
        </div>

        {/* Terminal Footer shortcuts */}
        <div className="px-4 py-2 bg-[#0E0E12] border-t border-[#D4AF37]/20 text-[11px] text-[#9CA3AF] flex flex-wrap items-center justify-between gap-2">
          <span>Shortcuts: help • skills • projects • contact</span>
          <span className="text-[#D4AF37]">ESC to exit</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
