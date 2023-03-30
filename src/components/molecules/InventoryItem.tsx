import { Dispatch, FC, SetStateAction } from "react";
import { motion } from "framer-motion";
import { midEnterAnimation } from "@constants";
import Image from "next/image";
import { DownloadIcon, ScrollItem } from "@components";
import download from "downloadjs";

interface InventoryItemProps {
  src: string;
  isBanner?: boolean;
  setImageModal: Dispatch<SetStateAction<string>>;
}

const InventoryItem: FC<InventoryItemProps> = (props: InventoryItemProps) => {
  const { src, isBanner = false, setImageModal } = props;

  return (
    <div className={`${isBanner ? "col-span-1" : ""} self-start`}>
      <ScrollItem>
        <motion.div
          className={`rounded-xl flex flex-col items-center justify-center gap-4`}
          {...midEnterAnimation}
        >
          <motion.div
            onClick={() => setImageModal(src)}
            className="cursor-pointer w-[200px] h-[200px] relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Image
              src={src}
              alt="Inventory"
              className="rounded-sm"
              style={{ objectFit: "cover" }}
              fill
            />
          </motion.div>

          <div className="" onClick={() => download(src)}>
            <DownloadIcon />
          </div>
        </motion.div>
      </ScrollItem>
    </div>
  );
};

export default InventoryItem;
