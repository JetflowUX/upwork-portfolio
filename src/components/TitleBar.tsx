import React from 'react';
import { Search, LayoutPanelLeft, Minus, Square, X, Menu } from 'lucide-react';
export function TitleBar({ onToggleSidebar }: { onToggleSidebar?: () => void; }) {
  return (
    <div className="h-10 bg-ide-titlebar flex items-center justify-between px-4 border-b border-ide-border select-none shrink-0">
      {/* Left: macOS buttons & Menu */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89f24]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></div>
        </div>

        <button onClick={onToggleSidebar} className="md:hidden p-1 rounded hover:bg-ide-highlight">
          <Menu size={16} />
        </button>

        <div className="hidden md:flex items-center gap-3 text-[13px] text-ide-muted">
          <span className="hover:text-ide-text cursor-pointer">File</span>
          <span className="hover:text-ide-text cursor-pointer">Edit</span>
          <span className="hover:text-ide-text cursor-pointer">View</span>
          <span className="hover:text-ide-text cursor-pointer">Go</span>
          <span className="hover:text-ide-text cursor-pointer">Run</span>
          <span className="hover:text-ide-text cursor-pointer">Terminal</span>
          <span className="hover:text-ide-text cursor-pointer">Help</span>
        </div>
      </div>

      {/* Center: Search / Command Palette */}
      <div className="flex-1 max-w-md mx-4 hidden sm:flex">
        <div className="flex items-center w-full bg-ide-highlight/50 border border-ide-border rounded-md px-3 py-1 text-xs text-ide-muted hover:bg-ide-highlight transition-colors cursor-pointer">
          <Search size={14} className="mr-2" />
          <span className="flex-1 text-center">john-doe : portfolio</span>
          <span className="text-[10px] opacity-50">Ctrl P</span>
        </div>
      </div>

      {/* Right: Window controls / Layout toggles */}
      <div className="flex items-center gap-4 text-ide-muted">
        <div className="hidden lg:flex items-center gap-2">
          <LayoutPanelLeft
            size={16}
            className="hover:text-ide-text cursor-pointer" />
          
          <div size={16} className="hover:text-ide-text cursor-pointer" />
          <div size={16} className="hover:text-ide-text cursor-pointer" />
        </div>
      </div>
    </div>);

}