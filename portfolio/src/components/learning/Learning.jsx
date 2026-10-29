import { learningSkills } from "../../Data";

const Learning = () => {
  return (
    <section
      id="learning"
      className=" bg-white/[.018] px-6 py-20 text-white md:px-12"
    >
      {" "}
      <div className="mx-auto max-w-6xl">
        {" "}
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-lime-400">
          {" "}
          My Learning Journey{" "}
        </p>{" "}
        <h2 className="text-3xl font-bold md:text-5xl">
          {" "}
          Currently <span className="text-lime-400">Learning.</span>{" "}
        </h2>{" "}
        <p className="mt-4 max-w-2xl text-gray-400">
          {" "}
          Continuously learning, building projects, and improving my skills as a
          Java Full Stack Developer.{" "}
        </p>{" "}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {" "}
          {learningSkills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-lime-400/50"
            >
              {" "}
              <div className="flex items-start justify-between gap-3">
                {" "}
                <div>
                  {" "}
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {" "}
                    {skill.category}{" "}
                  </p>{" "}
                  <h3 className="mt-2 text-xl font-semibold">
                    {" "}
                    {skill.name}{" "}
                  </h3>{" "}
                </div>{" "}
                <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1 text-xs text-lime-300">
                  {" "}
                  {skill.status}{" "}
                </span>{" "}
              </div>{" "}
              <p className="mt-4 min-h-12 text-sm leading-6 text-gray-400">
                {" "}
                {skill.description}{" "}
              </p>{" "}
              <div className="mt-5 flex items-center justify-between text-xs">
                {" "}
                <span className="text-gray-500"> Learning Progress </span>{" "}
                <span className="font-medium text-lime-400">
                  {" "}
                  {skill.progress}%{" "}
                </span>{" "}
              </div>{" "}
              <div
                className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-label={`${skill.name} learning progress`}
                aria-valuenow={skill.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {" "}
                <div
                  className="h-full rounded-full bg-lime-400 transition-all duration-500"
                  style={{ width: `${skill.progress}%` }}
                />{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );

};

export default Learning;
