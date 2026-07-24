function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">

      <p className="text-blue-400 font-semibold tracking-widest uppercase">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold text-white mt-3">
        {title}
      </h2>

    </div>
  );
}

export default SectionHeading;