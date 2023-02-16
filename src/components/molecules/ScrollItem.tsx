import { FC, ReactNode, RefObject, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

//used to animate container scrolling in and out of view
interface ScrollItemProps {
  children: ReactNode;
  index?: number;
  disableScrollUp?: boolean; //disable
  duration?: number;
}
const ScrollItem: FC<ScrollItemProps> = (props: ScrollItemProps) => {
  const { children, index = 0, disableScrollUp = true, duration = 1.5 } = props;

  const [scrollDown, setScrollDown] = useState<boolean>(true);

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 100px -50px 0px" });

  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.25,
        ease: "easeInOut",
        duration: duration,
      },
    },
    hidden: {
      opacity: disableScrollUp ? 0 : 1,
      scale: disableScrollUp ? 1 : 1,
      y: disableScrollUp ? 20 : 0,
    },
  };

  //scroll direction
  // const ref = useRef() as RefObject<HTMLDivElement> | undefined;

  // const scrollRef = useRef<number>();
  // const { scrollY } = useScroll({ container: ref });
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   // console.log("Page scroll: ", scrollRef.current, latest);

  //   //first instance
  //   if (scrollRef.current === undefined) {
  //     scrollRef.current = latest;
  //     return;
  //   }

  //   //scroll down
  //   if (scrollRef.current < latest) {
  //     setScrollDown(true);
  //   }
  //   //scroll up
  //   else if (scrollRef.current > latest) {
  //     setScrollDown(false);
  //   }

  //   scrollRef.current = latest;
  // });

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial={"hidden"}
      // animate={"visible"}
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default ScrollItem;
