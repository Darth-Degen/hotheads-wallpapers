import { ArrowIcon } from "@components";
import { arrowVariants } from "@constants";
import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  isActive: boolean;
  label: string;
}

const DropdownButton: FC<Props> = (props: Props) => {
  const { isActive, label } = props;

  const styles: string = "w-56 h-10 bg-dark text-sm";

  return (
    <button
      className={`relative flex justify-between ${styles} border border-gray-300 rounded items-center p-2 cursor-pointer`}
    >
      {label}
      <motion.div animate={isActive ? "end" : "start"} variants={arrowVariants}>
        <ArrowIcon color={"#d1d5db"} />
      </motion.div>
    </button>
  );
};

export default DropdownButton;
