import { skillCategories } from "../../Data";
import SectionHeading from "../SectionHeading/SectionHeading";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] px-6 py-20 text-white md:px-12"
    >
      {" "}
      <div className="mx-auto max-w-6xl">
        {" "}
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-lime-400">
          {" "}
          My Technical Skills{" "}
        </p>{" "}
        <h2 className="text-3xl font-bold md:text-5xl">
          {" "}
          Technologies I <span className="text-lime-400">Know.</span>{" "}
        </h2>{" "}
        <p className="mt-4 max-w-2xl text-gray-400">
          {" "}
          Technologies and tools I use to build full-stack applications and
          solve programming problems.{" "}
        </p>{" "}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {" "}
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime-400/40"
            >
              {" "}
              <h3 className="mb-5 text-lg font-semibold">
                {" "}
                {category.title}{" "}
              </h3>{" "}
              <div className="flex flex-wrap gap-2">
                {" "}
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
                  >
                    {" "}
                    {skill}{" "}
                  </span>
                ))}{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Skills;
