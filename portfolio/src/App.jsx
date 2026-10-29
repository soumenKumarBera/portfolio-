import { useState } from "react";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  X,
  ExternalLink,
  Terminal,
  Braces,
  Database,
  Layers3,
  Download,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projecs from "./components/Projeccs/Projecs.";

import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Learning from "./components/learning/Learning";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#09090b] text-zinc-300 relative">
      <Header />

      <main className="relative z-10">
        <About />

        <Skills />
        <Learning />

        <Projecs />

        <Contacts />
      </main>

      <Footer />
    </div>
  );
}

export default App;
