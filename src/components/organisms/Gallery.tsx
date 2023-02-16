import { Dispatch, FC, SetStateAction } from "react";
import { GalleryItem, ScrollItem } from "@components";
import { Collection } from "@types";
import { useWindowSize } from "@hooks";
import { motion } from "framer-motion";

interface GalleryProps {
  collection: Collection[];
  setImageModal: Dispatch<SetStateAction<string>>;
}

const Gallery: FC<GalleryProps> = (props: GalleryProps) => {
  const { collection, setImageModal } = props;
  const [winWidth, winHeight] = useWindowSize();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const getDelayOrder = (index: number): number => {
    // return index % 6;
    if (winWidth < 767) {
      return index < 6 ? index % 6 : index % 2;
    }
    return index < 6 ? index % 6 : index % 3;
  };

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-x-8 md:gap-y-3 md:px-6 xl:px-20"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {collection &&
        collection.map((item, index) => {
          return (
            <ScrollItem
              duration={1}
              key={index}
              index={getDelayOrder(index)}
              enableY={true}
              isInViewOnce={true}
            >
              <GalleryItem
                key={index}
                index={index}
                setImageModal={setImageModal}
                src={item.src}
              />
            </ScrollItem>
          );
        })}
    </motion.div>
  );
};

export default Gallery;
