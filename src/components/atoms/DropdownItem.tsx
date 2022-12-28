import { FC } from "react";
import { motion } from "framer-motion";
import { Collection } from "@types";

interface Props {
  item: Collection;
  handleClick: (item: Collection) => void;
}

const DropdownItem: FC<Props> = (props: Props) => {
  const { item, handleClick } = props;
  const styles: string = "w-56 h-10 bg-dark text-sm";

  return (
    <motion.li
      key={item?.id}
      className={`${styles} px-2 cursor-pointer flex items-center hover:bg-[#6366f1]`}
      whileTap={{
        backgroundColor: "#4f46e5",
      }}
      transition={{ duration: 0.05, ease: "easeInOut" }}
      onClick={() => handleClick(item)}
    >
      {item?.name}
    </motion.li>
  );
};

export default DropdownItem;
