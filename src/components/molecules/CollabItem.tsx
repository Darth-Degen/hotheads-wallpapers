import { Dispatch, FC, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExchangeIcon, TwitterIcon } from "@components";
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
    <div
      className={`rounded-lg md:rounded-3xl relative flex flex-col items-center w-full gap-3 py-1`}
    >
      <motion.div
        className="medium-frame relative cursor-pointer"
        onClick={() => setImageModal(item.src)}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Image
          src={item.src}
          alt={`Colab-${index}`}
          width={item.isBanner ? 600 : 200}
          height={200}
          className="rounded-lg md:rounded-3xl"
        />
      </motion.div>
      <p className="hh-name text-center w-full text-[10px]">{item.label}</p>
      <div className="flex gap-2">
        <div
          className={`cursor-pointer hover:outline hover:outline-white rounded-full transition-all duration-100`}
          onClick={() => window.open(item.url, "_blank", "noreferrer")}
        >
          <ExchangeIcon size={30} />
        </div>
        <div className=" transition-all duration-100` hover:outline hover:outline-white rounded-full">
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default CollabItem;
