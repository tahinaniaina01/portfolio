export const parentsVariants = (delay = 0) => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1,
        delay: delay,
      },
    },
  };
};

export const variantTranslate = ({
  x,
  y,
  z,
  delay,
}: {
  x?: number;
  y?: number;
  z?: number;
  delay?: number;
}) => {
  return {
    hidden: {
      x: x ?? 0,
      y: y ?? 0,
      z: z ?? 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      z: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        delay: delay ?? 0,
      },
    },
  };
};

export const variantScale = (delay = 0, scale = 0) => {
  return {
    hidden: {
      scale: scale,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        delay: delay,
      },
    },
  };
};

export const variantBlur = (delay = 0) => {
  return {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: 5,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        delay: delay,
      },
    },
  };
};

export const variantImage = (delay = 0) => {
  return {
    hidden: {
      filter: "blur(50px)",
      opacity: 0,
      scale: 1.25,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        delay: delay,
      },
    },
  };
};
