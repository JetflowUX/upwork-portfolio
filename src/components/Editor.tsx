import type { FC, ReactNode } from 'react';
import {
  FileCode2,
  X,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Terminal,
  Database,
  Cloud } from
'lucide-react';
export function Editor() {
  return (
    <div className="flex-1 flex flex-col bg-ide-bg overflow-hidden relative">
      {/* Tabs */}
      <div className="flex h-9 bg-ide-sidebar border-b border-ide-border shrink-0 overflow-x-auto hide-scrollbar">
        <div className="flex items-center px-3 py-1 bg-ide-bg border-t-2 border-t-ide-accent text-ide-text min-w-[120px] cursor-pointer group">
          <FileCode2 size={14} className="text-[#519aba] mr-2" />
          <span className="text-[13px] mr-2">home.tsx</span>
          <X
            size={14}
            className="ml-auto opacity-0 group-hover:opacity-100 hover:bg-ide-highlight rounded-md p-[2px]" />
          
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-center h-6 px-4 text-[12px] text-ide-muted border-b border-ide-border shrink-0">
        <span className="hover:text-ide-text cursor-pointer">
          john-doe-portfolio
        </span>
        <ChevronRight size={14} className="mx-1" />
        <span className="hover:text-ide-text cursor-pointer">src</span>
        <ChevronRight size={14} className="mx-1" />
        <span className="hover:text-ide-text cursor-pointer flex items-center">
          <FileCode2 size={12} className="text-[#519aba] mr-1" />
          home.tsx
        </span>
      </div>

      {/* Editor Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <div id="home" className="scroll-mt-20">
          {/* Comment */}
          <div className="text-ide-comment text-sm md:text-base mb-8">
            // hello world !! Welcome to my portfolio
          </div>

          {/* Big Name */}
          <div className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tighter mb-6 flex flex-wrap items-end gap-x-4">
            <span className="text-white">John</span>
            <span className="text-ide-accent text-glow">Doe</span>
            <span className="w-4 h-12 md:w-8 md:h-20 bg-white animate-blink inline-block ml-2 mb-2 md:mb-4"></span>
          </div>

          {/* Role Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Tag color="bg-[#4ade80]" text="Full-Stack Engineer" />
            <Tag color="bg-[#a855f7]" text="TypeScript / Go" />
            <Tag color="bg-[#3b82f6]" text="Cloud / DevOps" />
            <Tag color="bg-[#ff2d9c]" text="@ TechCorp" />
          </div>

          {/* Tagline */}
          <div className="text-ide-muted text-lg md:text-xl mb-6 flex items-center">
            Building scalable systems and intuitive interface
            <span className="w-2 h-5 bg-ide-muted animate-blink inline-block ml-[2px]"></span>
          </div>

          {/* Description */}
          <div className="text-ide-text text-base md:text-lg leading-relaxed max-w-3xl mb-12">
            I live at the crossroads of <span className="text-[#4cc9f0]">frontend magic</span>, <span className="text-[#4cc9f0]">backend architecture</span>, and <span className="text-[#4cc9f0]">cloud infrastructure</span>. I build systems that are genuinely <span className="text-[#4cc9f0]">performant</span> and <span className="text-[#4cc9f0]">scalable</span>.
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="bg-ide-blue hover:bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2 text-sm transition-colors">
              <Code2 size={16} />
              Projects
            </button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="border border-ide-border hover:bg-ide-highlight text-ide-text px-6 py-2 rounded flex items-center gap-2 text-sm transition-colors">
              <Terminal size={16} />
              About Me
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="border border-ide-border hover:bg-ide-highlight text-ide-text px-6 py-2 rounded flex items-center gap-2 text-sm transition-colors">
              <Mail size={16} />
              Contact
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border border-ide-border rounded-lg p-6 mb-12 bg-ide-sidebar/50">
            <Stat value="5+" label="YEARS" />
            <Stat value="20+" label="PROJECTS" />
            <Stat value="∞" label="CURIOSITY" />
            <Stat value="↑" label="ALWAYS LEARNING" />
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            <SocialLink icon={<Github size={14} />} text="GitHub" />
            <SocialLink
              icon={<Linkedin size={14} className="text-[#0a66c2]" />}
              text="LinkedIn" />
            
            <SocialLink
              icon={<Mail size={14} className="text-[#ea4335]" />}
              text="Email" />
            
            <SocialLink
              icon={<Database size={14} className="text-[#f29111]" />}
              text="Blog" />
            
            <SocialLink
              icon={<Cloud size={14} className="text-[#00add8]" />}
              text="Twitter" />
            
          </div>
        </div>

        {/* Other sections */}
        <div className="max-w-4xl mx-auto">
          <section id="about" className="scroll-mt-20 py-12">
            <h2 className="text-2xl font-display font-bold mb-4">About</h2>
            <p className="text-ide-text mb-6">A short bio about John Doe, background, and interests. This section can be expanded with experience details, education, and key achievements.</p>
          </section>

          <section id="projects" className="scroll-mt-20 py-12">
            <h2 className="text-2xl font-display font-bold mb-4">Projects</h2>
            <p className="text-ide-text mb-6">Featured projects listing with short descriptions, tech stack, and links.</p>
          </section>

          <section id="skills" className="scroll-mt-20 py-12">
            <h2 className="text-2xl font-display font-bold mb-4">Skills</h2>
            <p className="text-ide-text mb-6">Technical skills, languages, frameworks, and tools.</p>
          </section>

          <section id="experience" className="scroll-mt-20 py-12">
            <h2 className="text-2xl font-display font-bold mb-4">Experience</h2>
            <p className="text-ide-text mb-6">Work history and notable roles.</p>
          </section>

          <section id="contact" className="scroll-mt-20 py-12">
            <h2 className="text-2xl font-display font-bold mb-4">Contact</h2>
            <p className="text-ide-text mb-6">Ways to get in touch: email, social links, and a contact form placeholder.</p>
          </section>

          <section id="resume" className="scroll-mt-20 py-12">
            <h2 className="text-2xl font-display font-bold mb-4">Resume</h2>
            <p className="text-ide-text mb-6">Downloadable resume and highlights.</p>
          </section>
        </div>
      </div>
    </div>
  </div>);

};

type TagProps = { color: string; text: string };
const Tag: FC<TagProps> = ({ color, text }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-ide-border bg-ide-highlight/30 text-xs text-ide-text">
      <div className={"w-2 h-2 rounded-full " + color}></div>
      {text}
    </div>);

};
type StatProps = { value: string; label: string };
const Stat: FC<StatProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
        {value}
      </div>
      <div className="text-[10px] text-ide-muted tracking-widest">{label}</div>
    </div>);

}
type SocialLinkProps = { icon: ReactNode; text: string };
const SocialLink: FC<SocialLinkProps> = ({ icon, text }) => {
  return (
    <button className="flex items-center gap-2 px-3 py-1.5 rounded border border-ide-border hover:bg-ide-highlight text-xs text-ide-muted hover:text-ide-text transition-colors">
      {icon}
      {text}
    </button>);

};