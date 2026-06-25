import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  link?: string;
  delay?: number;
  image?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  delay = 0,
  image,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="card group cursor-pointer relative overflow-hidden"
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-25 transition-opacity duration-300"
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
        </div>
      )}
      {icon && (
        <motion.div
          className="mb-4 text-primary-600 flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 mx-auto relative z-10"
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
        >
          {icon}
        </motion.div>
      )}
      <div className="flex-grow flex flex-col relative z-10">
        <h3 className="text-lg font-semibold mb-2 text-secondary-900 group-hover:text-primary-600 transition-colors duration-300 text-center">
          {title}
        </h3>
        <p className="text-sm text-secondary-600 leading-relaxed text-center flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
