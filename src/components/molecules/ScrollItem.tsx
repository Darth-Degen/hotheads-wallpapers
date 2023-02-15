import { FC, ReactNode, useRef } from "react";
import { useInView, motion } from "framer-motion";

//used to animate container scrolling in and out of view
interface ScrollItemProps {
  children: ReactNode;
  index?: number;
  scrollDown?: boolean;
}
const ScrollItem: FC<ScrollItemProps> = (props: ScrollItemProps) => {
  const { children, index = 0, scrollDown = true } = props;

  const ref = useRef(null);
  const isInView = useInView(ref);

  const animate = true;
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      // y: 0,
      transition: {
        // staggerChildren: 0.2,
        // staggerDirection: -1,
        delay: index * 0.5,
        ease: "easeInOut",
        duration: 2,
      },
    },
    hidden: {
      opacity: animate && scrollDown ? 0 : 1,
      scale: animate && scrollDown ? 1 : 1,
      // y: animate && scrollDown ? 100 : 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial={"hidden"}
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default ScrollItem;
