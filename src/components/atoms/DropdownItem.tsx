import { Dispatch, FC, SetStateAction } from "react";
import { motion } from "framer-motion";
import { Collection } from "@types";
import { backgroundAnimations } from "@constants";

interface Props {
  item: Collection;
  handleClick: (id: number) => void;
}

const DropdownItem: FC<Props> = (props: Props) => {
  const { item, handleClick } = props;
  const styles: string = "w-56 h-10 bg-dark text-xs";

  return (
    <motion.li
      key={item?.id}
      className={`${styles} px-2 cursor-pointer flex items-center`}
      {...backgroundAnimations}
      onClick={() => handleClick(item?.id)}
    >
      {item.id < 10 ? `00${item.id}` : `0${item.id}`}
    </motion.li>
  );
};

export default DropdownItem;
