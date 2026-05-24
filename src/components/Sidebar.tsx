import React from "react";
import {
  ChevronDown,
  FileJson,
  FileCode2,
  FileText,
  FileType2,
  FileImage,
  X,
} from "lucide-react";
export function Sidebar({
  mobileOpen = false,
  onClose,
}: {
  mobileOpen?: boolean;
  onClose?: () => void;
}) {
  const base =
    "w-64 bg-ide-sidebar border-r border-ide-border flex flex-col shrink-0";

  if (!mobileOpen) {
    return (
      <div className={`hidden md:flex ${base}`}>
        <SidebarContent />
      </div>
    );
  }

  return (
    <div className={`fixed inset-y-0 left-0 z-50 block ${base} md:hidden`}>
      <div className="h-10 flex items-center justify-between px-3 border-b border-ide-border">
        <div className="text-sm font-semibold text-ide-muted">EXPLORER</div>
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-ide-highlight"
        >
          <X size={16} />
        </button>
      </div>
      <SidebarContent />
    </div>
  );
}

function SidebarContent() {
  return (
    <>
      <div className="h-9 flex items-center px-4 text-[11px] font-semibold tracking-wider text-ide-muted hidden md:flex">
        EXPLORER
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Folder Header */}
        <div className="flex items-center px-1 py-1 cursor-pointer hover:bg-ide-highlight text-ide-text text-sm font-bold">
          <ChevronDown size={16} className="mr-1" />
          PORTFOLIO
        </div>

        {/* Files */}
        <div className="flex flex-col mt-1">
          <FileItem name="home.tsx" icon={<FileCode2 size={16} className="text-[#519aba]" />} active target="home" />
          <FileItem name="about.html" icon={<FileCode2 size={16} className="text-[#e34c26]" />} target="about" />
          <FileItem name="projects.js" icon={<FileCode2 size={16} className="text-[#f1e05a]" />} target="projects" />
          <FileItem name="skills.json" icon={<FileJson size={16} className="text-[#cbcb41]" />} target="skills" />
          <FileItem name="experience.ts" icon={<FileType2 size={16} className="text-[#3178c6]" />} target="experience" />
          <FileItem name="contact.css" icon={<FileCode2 size={16} className="text-[#563d7c]" />} target="contact" />
          <FileItem name="README.md" icon={<FileText size={16} className="text-[#083fa1]" />} target="resume" />
          <FileItem name="Resume.pdf" icon={<FileImage size={16} className="text-[#b02626]" />} target="resume" />
        </div>
      </div>

      {/* Copilot Chip */}
      <div className="p-4 mt-auto">
        <div className="flex items-center justify-between bg-[#1e1e2e] border border-[#313244] rounded-md px-3 py-2 cursor-pointer hover:bg-[#2a2b3d] transition-colors">
          <div className="flex items-center gap-2 text-ide-purple text-xs font-medium">
            <span className="text-lg leading-none">✨</span>
            John's Copilot
          </div>
          <span className="text-[10px] text-ide-muted bg-black/30 px-1.5 py-0.5 rounded">
            AI
          </span>
        </div>
      </div>
    </>
  );
}
function FileItem({ name, icon, active = false, target }: { name: string; icon: React.ReactNode; active?: boolean; target?: string; }) {
  const handleClick = () => {
    if (target) {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      className={`flex items-center px-5 py-[6px] cursor-pointer text-[13px] ${active ? 'bg-ide-highlight text-ide-text' : 'text-ide-muted hover:bg-ide-highlight/50 hover:text-ide-text'}`}
    >
      <span className="mr-2">{icon}</span>
      {name}
    </div>
  );
}
