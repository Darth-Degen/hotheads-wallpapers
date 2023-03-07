import { FC } from "react";
import { motion } from "framer-motion";
import { midEnterAnimation } from "@constants";
import Image from "next/image";
import { DownloadIcon } from "@components";
import download from "downloadjs";

interface InventoryItemProps {
  src: string;
}

const InventoryItem: FC<InventoryItemProps> = (props: InventoryItemProps) => {
  const { src } = props;

  return (
    <motion.div
      className="rounded-xl flex flex-col items-center justify-center gap-4"
      {...midEnterAnimation}
    >
      <Image
        src={src}
        alt="Inventory"
        width={200}
        height={200}
        className="rounded-xl"
      />
      <div className="" onClick={() => download(src)}>
        <DownloadIcon />
      </div>
    </motion.div>
  );
};

export default InventoryItem;
