import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaBuilding,
  FaCheckCircle,
} from "react-icons/fa";

function ExperienceCard({
  icon,
  role,
  company,
  duration,
  mode,
  highlights,
}) {
  const Icon = icon;
  const ModeIcon = mode.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        p-5 sm:p-6 lg:p-8
        transition-all
        duration-300
      "
    >
      <div className="flex gap-4 sm:gap-6 items-start">
        {/* Icon */}
        <div
          className="
            flex
            h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16
            items-center
            justify-center
            rounded-xl
            bg-blue-500/10
            border
            border-blue-500/20
            text-blue-400
            text-2xl sm:text-3xl
            shrink-0
          "
        >
          <Icon />
        </div>

        {/* Content */}
        <div className="flex-1">

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {role}
          </h3>

          <p className="mt-1 text-base sm:text-lg text-blue-300">
            {company}
          </p>

          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-6 text-xs sm:text-sm text-gray-400">

            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              {duration}
            </div>

            <div className="flex items-center gap-2">
              <ModeIcon />
              {mode.type}
            </div>

          </div>

          <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3"
              >
                <FaCheckCircle className="mt-0.5 sm:mt-1 text-blue-400 shrink-0" />

                <p className="text-gray-300 leading-6 sm:leading-7 text-sm sm:text-base">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;