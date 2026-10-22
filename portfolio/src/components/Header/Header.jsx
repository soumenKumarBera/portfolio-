import { useState } from "react";
import { navItems } from "../../Data";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <div className="grid-bg pointer-events-none fixed inset-0 -z-0" />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[.08] bg-[#09090b]/85 backdrop-blur-xl">
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="Go to home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime-300 font-mono font-black text-zinc-950">
              S.
            </span>
            <span className="font-semibold tracking-tight text-white">
              soumen<span className="text-lime-300">.dev</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-zinc-400 transition hover:text-lime-300"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-lime-300/50 px-4 py-2 text-sm text-lime-200 transition hover:bg-lime-300 hover:text-zinc-950"
            >
              Let's talk <ArrowUpRight className="ml-1 inline" size={15} />
            </a>
          </div>
          <button
            className="rounded-lg border border-white/10 p-2 text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {menuOpen && (
            <div className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-white/10 bg-[#09090b] p-5 md:hidden">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 hover:bg-white/5 hover:text-lime-300"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
export default Header;
