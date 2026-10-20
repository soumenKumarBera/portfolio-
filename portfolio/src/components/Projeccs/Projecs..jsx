import SectionHeading from "../SectionHeading/SectionHeading";
import { projects } from "../../Data";
import { ArrowRight, ArrowUpRight, Code2, ExternalLink, GitCommit, GitCommitIcon } from "lucide-react";

const Projecs = () =>{
return  <section id="projects" className="border-y border-white/[.07] bg-white/[.018]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
            <SectionHeading eyebrow="Selected work" title="Projects I've built" number="03" />
            <div className="space-y-5">
              {projects.map(project => <article key={project.number} className="group grid overflow-hidden rounded-3xl border border-white/10 bg-[#0e0e11] transition hover:border-white/20 md:grid-cols-[.8fr_1.2fr]">
                <div className={`relative flex min-h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent} p-8`}>
                  <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at center, rgba(255,255,255,.12) 1px, transparent 1px)',backgroundSize:'18px 18px'}} />
                  <div className="relative grid h-32 w-32 rotate-[-5deg] place-items-center rounded-[2rem] border border-white/15 bg-black/30 shadow-2xl backdrop-blur-sm transition duration-500 group-hover:rotate-0 group-hover:scale-105"><span className="font-mono text-4xl font-bold tracking-tighter text-white">{project.mark}</span></div>
                  <span className="absolute left-6 top-6 font-mono text-xs text-zinc-500">{project.number} / PROJECT</span>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-mono text-[10px] tracking-[.22em] text-lime-300">{project.type}</p>
                  <div className="mt-3 flex items-center justify-between gap-3"><h3 className="text-2xl font-semibold text-white">{project.name}</h3><a href={project.gitHub} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} link`} className="rounded-full border border-white/10 p-2.5 transition hover:border-lime-300/40 hover:text-lime-300"><ArrowUpRight size={18}/></a></div>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{project.stack.map(tag => <span key={tag} className="rounded-md bg-white/[.05] px-2.5 py-1.5 font-mono text-[10px] text-zinc-400">{tag}</span>)}</div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-lime-300">View project <ArrowRight size={16}/></a>
                </div>
              </article>)}
            </div>
            <div className="mt-8 flex justify-center"><a href="https://github.com/soumenKumarBera" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-lime-300/40 hover:text-lime-300"><GitCommit size={17}/> More on Github <ExternalLink size={14}/></a></div>
          </div>
        </section>



}

export default Projecs;