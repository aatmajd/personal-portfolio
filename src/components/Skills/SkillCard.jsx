import { motion } from "framer-motion";

function SkillCard({ title, icon: Icon, skills }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
        scale: 0.98,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      className="
      h-full
        bg-gray-900/60
        backdrop-blur-md
        border
        border-gray-800
        rounded-3xl
        p-8
        shadow-xl

        transition-all
        duration-300

        hover:border-blue-500/40
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="
            h-12
            w-12
            rounded-xl
            bg-blue-500/10
            flex
            items-center
            justify-center
          "
        >
          <Icon className="text-blue-400 text-2xl " />
        </div>

        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.06,
              duration: 0.35,
            }}
            whileHover={{
              scale: 1.05,
            }}
            className="
              px-4
              py-2
              rounded-full
              

              bg-blue-500/10
              border
              border-blue-500/20

              text-blue-300
              text-sm
              font-semibold

              transition-all
              duration-300

              hover:bg-blue-500/20
              hover:border-blue-500/40
              hover:text-blue-200
            "
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;