import { Dispatch, FC, SetStateAction } from "react";
import { CollabItem, GalleryItem, ScrollItem } from "@components";

import { Collab, Collection } from "@types";
import { useWindowSize } from "@hooks";
import { motion } from "framer-motion";

interface GalleryProps {
  collabs: Collab[];
  setImageModal: Dispatch<SetStateAction<string>>;
}

const Gallery: FC<GalleryProps> = (props: GalleryProps) => {
  const { collabs, setImageModal } = props;
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
      className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 md:gap-x-8 md:gap-y-8 md:px-6 py-5"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {collabs.map((item: Collab, index) => {
        return (
          <div className={` ${item.isBanner ? "col-span-2" : ""}`} key={index}>
            <ScrollItem
              duration={1}
              index={getDelayOrder(index)}
              enableY={true}
              isInViewOnce={true}
            >
              <CollabItem
                index={index}
                setImageModal={setImageModal}
                item={item}
              />
            </ScrollItem>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Gallery;
