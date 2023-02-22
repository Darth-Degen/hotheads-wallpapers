import { Dispatch, FC, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExchangeIcon } from "@components";

interface GalleryItemProps {
  index: number;
  setImageModal: Dispatch<SetStateAction<string>>;
  src: string;
  url: string;
}

const GalleryItem: FC<GalleryItemProps> = (props: GalleryItemProps) => {
  const { index, setImageModal, src, url } = props;
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
    <div className="rounded-lg md:rounded-3xl relative" key={index}>
      <motion.div
        className="cursor-pointer"
        key={index}
        whileHover={{ scale: 1.06 }}
        onClick={() => setImageModal(src)}
      >
        <Image
          src={src}
          alt={`HH-${index}`}
          width={200}
          height={200}
          className="rounded-lg md:rounded-3xl"
        />
        <div
          className="absolute top-1.5 right-1.5 md:top-2.5 md:right-2.5 cursor-pointer hover:outline hover:outline-white rounded-full transition-all duration-100"
          onClick={() => window.open(url, "_blank", "noreferrer")}
        >
          <ExchangeIcon size={25} />
        </div>
      </motion.div>
      <p className="font-mono text-center pt-3 w-full whitespace-nowrap text-xs">
        Hot Heads
      </p>
      <div className="font-mono text-center font-bold">#{getId(index)}</div>
    </div>
  );
};

export default GalleryItem;
