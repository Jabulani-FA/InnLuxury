export const floatVariant = (direction, delay, type) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "right" ? -100 : direction === "left" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: delay,
        type: type,
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };
};

export const containerVariant = (direction, stagger, duration) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "right" ? -100 : direction === "left" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            staggerChildren: stagger,
            ease: "easeOut",
            duration: duration,
        }
    }
  };
};
