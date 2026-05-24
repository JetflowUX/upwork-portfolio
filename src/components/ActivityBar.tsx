import React from 'react';
import {
  Files,
  Search,
  GitMerge,
  Blocks,
  Settings,
  CircleUser } from
'lucide-react';
export function ActivityBar() {
  return (
    <div className="hidden sm:flex w-12 bg-ide-activity flex flex-col items-center py-4 border-r border-ide-border shrink-0 justify-between">
      <div className="flex flex-col gap-6">
        <div className="relative group cursor-pointer">
          <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-[2px] h-8 bg-ide-accent"></div>
          <Files size={24} className="text-ide-text" strokeWidth={1.5} />
        </div>
        <Search
          size={24}
          className="text-ide-muted hover:text-ide-text cursor-pointer transition-colors"
          strokeWidth={1.5} />
        
        <GitMerge
          size={24}
          className="text-ide-muted hover:text-ide-text cursor-pointer transition-colors"
          strokeWidth={1.5} />
        
        <Blocks
          size={24}
          className="text-ide-muted hover:text-ide-text cursor-pointer transition-colors"
          strokeWidth={1.5} />
        
      </div>

      <div className="flex flex-col gap-6">
        <CircleUser
          size={24}
          className="text-ide-muted hover:text-ide-text cursor-pointer transition-colors"
          strokeWidth={1.5} />
        
        <Settings
          size={24}
          className="text-ide-muted hover:text-ide-text cursor-pointer transition-colors"
          strokeWidth={1.5} />
        
      </div>
    </div>);

}