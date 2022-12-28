import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<Props> = (props: Props) => {
  const { children, className, ...componentProps } = props;
  const styles: string = "w-56 h-10 bg-dark text-white text-sm";

  return (
    <motion.div
      whileTap={{ scale: componentProps.disabled ? 1 : 0.97 }}
      className={`transition-colors duration-200 bg-red-400 p-0.5 rounded ${
        componentProps.disabled
          ? "cursor-not-allowed bg-customDarkGray border-customDarkGray"
          : ""
      }`}
    >
      <button
        className={`${className} ${styles} transition-colors duration-200 relative flex justify-center items-center rounded text-center p-2 ${
          componentProps.disabled
            ? "cursor-not-allowed  bg-customDarkGray border-customDarkGray"
            : "hover:bg-red-400  "
        }`}
        {...componentProps}
        disabled={componentProps.disabled}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default Button;
