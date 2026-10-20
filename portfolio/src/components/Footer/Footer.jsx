import { ArrowUpRight } from "lucide-react";

const Footer = () =>{

  return <footer className="relative z-10 border-t border-white/[.08]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} Soumen Kumar Bera. Built with React &
            Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1 transition hover:text-lime-300"
          >
            Back to top <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>

}

export default Footer;