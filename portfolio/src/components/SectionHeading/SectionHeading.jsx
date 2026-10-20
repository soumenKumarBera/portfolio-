const SectionHeading = ({ eyebrow, title, number }) => {
  return (
    <div className="mb-10 flex items-end justify-between gap-4">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[.25em] text-lime-300">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      <span className="hidden font-mono text-sm text-zinc-600 sm:block">
        {number} / 04
      </span>
    </div>
  );
};
export default SectionHeading;
