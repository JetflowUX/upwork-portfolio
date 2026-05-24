import { useState } from "react";
import { TitleBar } from "./TitleBar";
import { ActivityBar } from "./ActivityBar";
import { Sidebar } from "./Sidebar";
import { Editor } from "./Editor";
import { StatusBar } from "./StatusBar";
export function IDEWindow() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen md:h-[90vh] md:max-h-[900px] md:w-[95vw] md:max-w-[1400px] bg-ide-bg md:rounded-xl overflow-hidden flex flex-col shadow-2xl border border-ide-border/50 ring-1 ring-white/10">
      <TitleBar onToggleSidebar={() => setMobileSidebarOpen((s) => !s)} />

      {/* Mobile overlay when sidebar is open */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/40"
        />
      )}

      <div className="flex-1 flex overflow-hidden">
        <ActivityBar />
        <Sidebar
          mobileOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
        <Editor />
      </div>
      <StatusBar />
    </div>
  );
}
