import { motion } from "framer-motion";
import { FaGithub, FaArrowRight, FaCheckCircle } from "react-icons/fa";

function ProjectCard({
  category,
  title,
  description,
  highlights,
  technologies,
  github,
  live,
  images,
  reverse,
}) {
  const imageSection = (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div
      className={
        images.length > 1
          ? "grid grid-cols-[0.8fr_1.2fr] gap-5 items-start"
          : "flex justify-center"
      }
    >
      {images.map((image) => (
        <div key={image.label}>
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden rounded-3xl border border-gray-800 shadow-xl bg-gray-900"
          >
            {/* Browser-style top bar for desktop screenshots */}
            {image.type === "desktop" && (
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            )}

            <img
              src={image.src}
              alt={image.label}
              className={
  image.type === "mobile"
    ? images.length > 1
      ? "h-[320px] object-contain mx-auto transition duration-500"
      : "h-[500px] object-contain mx-auto transition duration-500"
    : "w-full max-h-[500px] object-cover transition duration-500"
}
            />
          </motion.div>

          <p className="mt-3 text-center text-sm font-medium text-gray-400">
            {image.label}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);
  

  const textSection = (
    <motion.div
      initial={{
        opacity: 0,
        x: reverse ? 40 : -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <span className="text-blue-400 font-medium">
        {category.icon} {category.name}
      </span>

      <h3 className="text-4xl font-bold text-white mt-4 leading-tight">
        {title}
      </h3>

      <p className="text-gray-400 leading-8 mt-6">
        {description}
      </p>

      <div className="space-y-3 mt-8">
        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <FaCheckCircle className="text-blue-400" />

            <span className="text-gray-300">
              {item}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="
              px-4
              py-2
              rounded-full
              bg-blue-500/10
              border
              border-blue-500/20
              text-blue-300
              text-sm
              font-medium
              transition-all
              duration-300
              hover:bg-blue-500/20
            "
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-10">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
inline-flex
items-center
gap-2
rounded-xl
px-6
py-3
bg-white/5
border
border-white/10
backdrop-blur-md
text-white
font-medium
transition-all
duration-300
hover:bg-blue-500/10
hover:border-blue-400/50
">
          <FaGithub />
          Source Code
        </a>

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="
inline-flex
items-center
gap-2
rounded-xl
px-6
py-3
bg-white/5
border
border-white/10
backdrop-blur-md
text-white
font-medium
transition-all
duration-300
hover:bg-blue-500/10
hover:border-blue-400/50
"
          >
            Live Demo
            <FaArrowRight />
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {reverse ? (
        <>
          {imageSection}
          {textSection}
        </>
      ) : (
        <>
          {textSection}
          {imageSection}
        </>
      )}
    </div>
  );
}

export default ProjectCard;