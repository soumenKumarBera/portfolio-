import SectionHeading from "../SectionHeading/SectionHeading";
import { projects } from "../../Data";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  GitCommit,
  GitCommitIcon,
} from "lucide-react";

const Projecs = () => {
  return (
    <section id="projects" className="border-y border-white/[.07] bg-[#0a0a0a]">
      {" "}
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        {" "}
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've built"
          number="03"
        />{" "}
        <div className="space-y-6">
          {" "}
          {projects.map((project) => (
            <article
              key={project.number}
              className="group grid overflow-hidden rounded-3xl border border-white/10 bg-[#0e0e11] transition duration-300 hover:border-lime-300/30 md:grid-cols-[.9fr_1.1fr]"
            >
              {" "}
              {/* Project Image */}{" "}
              <div
                className={`relative min-h-64 overflow-hidden bg-gradient-to-br ${project.accent} md:min-h-full`}
              >
                {" "}
                <img
                  src={project.image}
                  alt={`${project.name} project screenshot`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />{" "}
                {/* Image Overlay */}{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />{" "}
                {/* Project Number */}{" "}
                <span className="absolute left-6 top-6 font-mono text-xs text-white/80">
                  {" "}
                  {project.number} / PROJECT{" "}
                </span>{" "}
                {/* Project Mark */}{" "}
                <div className="absolute bottom-6 left-6">
                  {" "}
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-lime-300">
                    {" "}
                    Featured Project{" "}
                  </span>{" "}
                  <h3 className="mt-2 text-3xl font-bold text-white">
                    {" "}
                    {project.name}{" "}
                  </h3>{" "}
                </div>{" "}
              </div>{" "}
              {/* Project Details */}{" "}
              <div className="flex flex-col p-6 sm:p-8 md:p-9">
                {" "}
                <p className="font-mono text-[10px] tracking-[.22em] text-lime-300">
                  {" "}
                  {project.type}{" "}
                </p>{" "}
                <div className="mt-3 flex items-center justify-between gap-3">
                  {" "}
                  <h3 className="text-2xl font-semibold text-white">
                    {" "}
                    {project.name}{" "}
                  </h3>{" "}
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} GitHub repository`}
                    className="shrink-0 rounded-full border border-white/10 p-2.5 text-zinc-300 transition hover:border-lime-300/40 hover:text-lime-300"
                  >
                    {" "}
                    <ArrowUpRight size={18} />{" "}
                  </a>{" "}
                </div>{" "}
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                  {" "}
                  {project.description}{" "}
                </p>{" "}
                {/* Technology Stack */}{" "}
                <div className="mt-6 flex flex-wrap gap-2">
                  {" "}
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[.06] bg-white/[.04] px-2.5 py-1.5 font-mono text-[10px] text-zinc-400"
                    >
                      {" "}
                      {tag}{" "}
                    </span>
                  ))}{" "}
                </div>{" "}
                {/* Project Links */}{" "}
                <div className="mt-auto flex flex-wrap items-center gap-5 pt-7">
                  {" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-lime-300"
                  >
                    {" "}
                    View project <ArrowRight size={16} />{" "}
                  </a>{" "}
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-lime-300"
                  >
                    {" "}
                    <GitCommit size={16} /> Source code{" "}
                    <ExternalLink size={13} />{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </article>
          ))}{" "}
        </div>{" "}
        {/* More Projects */}{" "}
        <div className="mt-10 flex justify-center">
          {" "}
          <a
            href="https://github.com/soumenKumarBera"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-lime-300/40 hover:text-lime-300"
          >
            {" "}
            <GitCommit size={17} /> More on GitHub{" "}
            <ExternalLink size={14} />{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Projecs;
