import { midExitAnimation } from "@constants";
import { DropdownButton, DropdownItem } from "@components";
import { Collection } from "@types";
import { Dispatch, FC, SetStateAction } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface Props {
  handleClick: (id: number) => void;
  setDidHover: Dispatch<SetStateAction<boolean>>;
  didHover: boolean;
  label: string;
  collections: Collection[];
}

// const itemVariants: Variants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 300, damping: 24 },
//   },
//   closed: { opacity: 0, y: 20, transition: { duration: 0.9 } },
// };

const container = {
  hidden: { y: -25, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.1,
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       delayChildren: 0.5,
//       staggerDirection: -1,
//     },
//   },
// };
const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  transition: {
    duration: 0.4,
    ease: "easeInOut",
    type: "spring",
    stiffness: 300,
    damping: 24,
  },
};

const Dropdown: FC<Props> = (props: Props) => {
  const { handleClick, setDidHover, didHover, label, collections } = props;

  return (
    <motion.div
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
    >
      <DropdownButton isActive={didHover} label={label} />
      <AnimatePresence mode="wait">
        {didHover && (
          <motion.div
            className="absolute z-50 pt-2 "
            key="dropdown-list"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.ul className="rounded divide-y divide-customMidGray border border-customMidGray shadow max-h-[200px] overflow-y-auto z-50">
              {collections &&
                collections.map((item: Collection) => (
                  <DropdownItem
                    item={item}
                    handleClick={handleClick}
                    key={item.id}
                    variants={itemVariants}
                  />
                ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dropdown;
