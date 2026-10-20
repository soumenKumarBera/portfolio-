
import { useState } from "react"
import { socials } from "../../Data"
import { ArrowUpRight, Mail } from "lucide-react"

const Contacts = () =>{

  
  const [copied, setCopied] = useState(false)
  const email = 'Soumenbera4017@gmail.com'
 

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }
return  <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-lime-300/20 bg-[#11130d] p-7 sm:p-12 lg:p-16">
            <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-lime-300/[.09] blur-3xl" />
            <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div><p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-lime-300">04 / Get in touch</p><h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">Have an opportunity or an idea?</h2><p className="mt-5 max-w-xl leading-7 text-zinc-400">I'm interested in internships, entry-level opportunities, and collaborating on useful projects. Let's connect.</p></div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <button onClick={copyEmail} className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-5 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-lime-200"><Mail size={17}/>{copied ? 'Email copied!' : 'Copy email'} <ArrowUpRight size={15}/></button>
                <a href={`mailto:${email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm text-white transition hover:bg-white/5">Send a message <ArrowUpRight size={15}/></a>
              </div>
            </div>
            <div className="relative mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-7">
              {socials.map(({label, href, icon: Icon}) => <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm text-zinc-400 transition hover:border-lime-300/30 hover:text-lime-300"><Icon size={16}/>{label}<ArrowUpRight size={13}/></a>)}
            </div>
          </div>
        </section>

}

export default Contacts;