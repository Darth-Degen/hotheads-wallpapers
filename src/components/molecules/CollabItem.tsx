import { Dispatch, FC, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExpandIcon, TwitterIcon } from "@components";
import { Collab } from "@types";

interface CollabItemProps {
  index: number;
  item: Collab;
  setImageModal: Dispatch<SetStateAction<string>>;
}

const CollabItem: FC<CollabItemProps> = (props: CollabItemProps) => {
  const { index, item, setImageModal } = props;
  const [progrss, setProgress] = useState<number>(0);

  const getId = (id: number): string => {
    if (id < 10) return ("00" + id) as string;
    return ("0" + id) as string;
  };

  return (
    <motion.div
      className={`rounded-lg md:rounded-3xl relative flex flex-col items-center w-full gap-3 py-1`}
    >
      <div className="relative">
        <Image
          src={item.src}
          alt={`Colab-${index}`}
          width={item.isBanner ? 600 : 200}
          height={200}
          className="rounded-lg md:rounded-3xl"
        />
        <div
          className={`absolute top-1.5 right-1.5 md:top-2.5 md:right-2.5 cursor-pointer 
          hover:outline hover:outline-custom-black rounded-full transition-all duration-100`}
          onClick={() => setImageModal(item.src)}
        >
          <ExpandIcon size={25} />
        </div>
      </div>
      <motion.p className="font-mono text-center w-full whitespace-nowrap text-xs">
        {item.label}
      </motion.p>
      <div className=" transition-all duration-100` hover:outline hover:outline-white rounded-full">
        <TwitterIcon />
      </div>
      {/* <div className="font-mono text-center font-bold">#{getId(index)}</div> */}
    </motion.div>
  );
};

export default CollabItem;
