import { skills } from "../../Data";
import SectionHeading from "../SectionHeading/SectionHeading";

const Skills =() =>{

return  <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <SectionHeading eyebrow="What I work with" title="Skills & toolkit" number="02" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({name, detail, icon: Icon}, i) => <article key={name} className="group rounded-2xl border border-white/10 bg-white/[.025] p-6 transition hover:-translate-y-1 hover:border-lime-300/30 hover:bg-lime-300/[.035]">
              <div className="mb-7 flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl border border-lime-300/20 bg-lime-300/[.07] text-lime-300"><Icon size={21} /></span><span className="font-mono text-xs text-zinc-700">0{i+1}</span></div>
              <h3 className="text-lg font-semibold text-white">{name}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{detail}</p>
            </article>)}
          </div>
          <div className="mt-5 rounded-2xl border border-white/[.08] px-5 py-4">
            <p className="text-xs uppercase tracking-[.18em] text-zinc-600">Also exploring</p>
            <p className="mt-2 text-sm leading-7 text-zinc-400">Spring Security · REST APIs · JWT authentication · SQL queries · MongoDB · Git & Code2 · Data Structures & Algorithms</p>
          </div>
        </section>

}

export default Skills;