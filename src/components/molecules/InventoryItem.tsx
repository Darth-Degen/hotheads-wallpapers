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
    <div className={`${isBanner ? "col-span-2" : ""} self-start`}>
      <ScrollItem>
        <motion.div
          className={`rounded-xl flex flex-col items-center justify-center gap-4`}
          {...midEnterAnimation}
        >
          <motion.div
            onClick={() => setImageModal(src)}
            whileHover={{ scale: 1.06 }}
            className="cursor-pointer"
          >
            {" "}
            <Image
              src={src}
              alt="Inventory"
              width={isBanner ? 400 : 200}
              height={200}
              className="rounded-xl"
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
