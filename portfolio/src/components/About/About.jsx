import { ArrowDownRight, ArrowUpRight, Code2, MapPin, Terminal } from "lucide-react";

const About = () =>{
  return <>
           <section id="home" className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[.06] px-3 py-2 text-xs text-lime-200">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-lime-300" /></span>
              BCA '26 · Open to opportunities
            </div>
            <p className="mb-4 font-mono text-sm text-zinc-500">HELLO, I'M</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">
              Soumen Kumar <span className="text-lime-300">Bera.</span>
            </h1>
            <h2 className="mt-6 text-xl font-medium text-zinc-300 sm:text-2xl">Java Full Stack Developer <span className="text-zinc-600">in progress.</span></h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              I build useful web applications with Java, Spring Boot, React, and databases. I enjoy solving problems, learning by building, and making ideas work end to end.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3.5 font-semibold text-zinc-950 transition hover:bg-lime-200">Explore my work <ArrowDownRight size={18} className="transition group-hover:translate-x-1 group-hover:translate-y-1" /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-medium text-white transition hover:border-white/40 hover:bg-white/5">Contact me <ArrowUpRight size={17} /></a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> Kolkata, India</span>
              <span className="h-1 w-1 rounded-full bg-zinc-700" />
              <span>Learn · Build · Solve · Improve</span>
            </div>
          </div>

          <div className="glow relative mx-auto w-full max-w-md">
            <div className="absolute -right-5 -top-6 h-24 w-24 rounded-full border border-lime-300/20" />
            <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-lime-300/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101013]">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" /><span className="h-2.5 w-2.5 rounded-full bg-lime-300/80" />
                <span className="ml-auto font-mono text-xs text-zinc-600">developer.java</span>
              </div>
              <div className="p-6 font-mono text-sm leading-8 sm:p-8">
                <p className="text-zinc-600">// A little about me</p>
                <p><span className="text-violet-300">const</span> <span className="text-sky-200">developer</span> = {'{'}</p>
                <p className="pl-5"><span className="text-lime-200">name</span>: <span className="text-amber-200">'Soumen'</span>,</p>
                <p className="pl-5"><span className="text-lime-200">focus</span>: <span className="text-amber-200">'Full Stack'</span>,</p>
                <p className="pl-5"><span className="text-lime-200">language</span>: <span className="text-amber-200">'Java'</span>,</p>
                <p className="pl-5"><span className="text-lime-200">mindset</span>: <span className="text-amber-200">'Always learning'</span>,</p>
                <p className="pl-5"><span className="text-lime-200">available</span>: <span className="text-sky-300">true</span></p>
                <p>{'}'};</p>
                <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/[.07] bg-white/[.03] px-4 py-3 text-xs text-zinc-400"><Terminal size={15} className="text-lime-300" /><span>Building something meaningful<span className="animate-pulse text-lime-300">_</span></span></div>
              </div>
            </div>
            <div className="absolute -right-3 top-1/3 hidden rounded-2xl border border-white/10 bg-[#17171b] p-4 shadow-2xl sm:block">
              <Code2 className="mb-2 text-lime-300" size={22} /><p className="text-xs text-zinc-500">Daily practice</p><p className="text-sm font-semibold text-white">Code & improve</p>
            </div>
          </div>
        </section>

        {/* Avout */}

        <section id="about" className="border-y border-white/[.07] bg-white/[.018]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[.7fr_1.3fr] md:py-24">
            <div><p className="mb-3 font-mono text-xs uppercase tracking-[.25em] text-lime-300">A little introduction</p><h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Curious mind.<br />Practical builder.</h2></div>
            <div>
              <p className="text-lg leading-8 text-zinc-300">I'm a BCA student focused on becoming a Java Full Stack Developer. I enjoy understanding how things work—from designing REST APIs and securing endpoints to building clean, responsive interfaces.</p>
              <p className="mt-5 leading-8 text-zinc-500">Right now, I'm strengthening my Java and Spring Boot fundamentals, practising data structures and algorithms, and building projects that turn what I learn into real features. I value consistency, clear code, and learning something new every day.</p>
              <div className="mt-7 flex flex-wrap gap-3">{['Problem solving', 'REST API development', 'Responsive UI', 'Continuous learning'].map(x => <span key={x} className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400">{x}</span>)}</div>
            </div>
          </div>
        </section>
  </>

}
export default About;