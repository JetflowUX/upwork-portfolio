import React from 'react';
import {
  GitBranch,
  XCircle,
  AlertTriangle,
  Sparkles,
  CheckCheck,
  Bell } from
'lucide-react';
export function StatusBar() {
  return (
    <div className="h-6 bg-ide-statusbar text-white flex items-center justify-between px-2 text-[11px] shrink-0">
      <div className="flex items-center gap-4 h-full">
        <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors">
          <GitBranch size={12} />
          <span>main</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors">
          <div className="flex items-center gap-1">
            <XCircle size={12} /> 0
          </div>
          <div className="flex items-center gap-1">
            <AlertTriangle size={12} /> 0
          </div>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors bg-ide-accent/20 text-ide-accent font-medium">
          <Sparkles size={12} />
          <span>John's Copilot</span>
        </div>
      </div>

      <div className="flex items-center gap-4 h-full">
        <div className="hidden sm:flex items-center gap-4 h-full">
          <span className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer transition-colors">
            Ln 42, Col 1
          </span>
          <span className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer transition-colors">
            Spaces: 2
          </span>
          <span className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer transition-colors">
            UTF-8
          </span>
          <span className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer transition-colors">
            CRLF
          </span>
          <span className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer transition-colors">
            TypeScript React
          </span>
          <span className="hover:bg-white/20 px-2 h-full flex items-center cursor-pointer transition-colors">
            Prettier
          </span>
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors">
          <CheckCheck size={14} />
        </div>
        <div className="flex items-center gap-1 hover:bg-white/20 px-2 h-full cursor-pointer transition-colors">
          <Bell size={12} />
        </div>
      </div>
    </div>);

}