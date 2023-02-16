import { Dispatch, FC, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExpandIcon } from "@components";

interface GalleryItemProps {
  index: number;
  setImageModal: Dispatch<SetStateAction<string>>;
  src: string;
}

const GalleryItem: FC<GalleryItemProps> = (props: GalleryItemProps) => {
  const { index, setImageModal, src } = props;
  const [progrss, setProgress] = useState<number>(0);
  // const ref = useRef(null) as RefObject<HTMLDivElement> | undefined;

  // const { scrollY } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"],
  // });

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   // console.log("child scroll: ", latest);
  //   setProgress(latest);
  // });

  const getId = (id: number): string => {
    if (id < 10) return ("00" + id) as string;
    return ("0" + id) as string;
  };

  return (
    <div>
      {/* <div ref={ref}> */}
      <motion.div className="rounded-lg md:rounded-3xl relative" key={index}>
        <div
          className="absolute top-1.5 right-1.5 md:top-2.5 md:right-2.5 cursor-pointer hover:outline hover:outline-custom-black rounded-full transition-all duration-100"
          onClick={() => setImageModal(src)}
        >
          <ExpandIcon size={25} />
        </div>
        <Image
          src={src}
          alt={`HH-${index}`}
          width={250}
          height={250}
          className="rounded-lg md:rounded-3xl"
        />
        <motion.div
          className={`h-5 bg-custom-green`}
          initial={{ width: 0 }}
          animate={{ width: progrss * 100 + "%" }}
          transition={{ duration: 0.69 }}
        />
        <motion.div className="font-mono text-center pt-4 text-xs">
          Hot Heads
        </motion.div>
        <div className="font-mono text-center font-bold">#{getId(index)}</div>
      </motion.div>
    </div>
  );
};

export default GalleryItem;
