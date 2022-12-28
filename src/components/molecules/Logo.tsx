import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo: FC = () => {
  return (
    <div className="my-2 flex items-end gap-2 text-gray-200 transition-colors ease-in-out duration-500 cursor-pointer">
      <motion.div>
        <Image
          src="/images/head_transparent.png"
          height={40}
          width={40}
          alt="hot head icon"
        />
      </motion.div>
      {/* <Image
        src="/images/logo_base.png"
        height={40}
        width={200}
        alt="hot head logo"
      /> */}
      {/* <h2 className="font-pressStart mb-0.5 text-2xl text-transparent bg-clip-text bg-gradient-to-t from-red-500  to-yellow-300"> */}
      <h2 className="font-pressStart mb-0.5 text-2xl text-orange-300">
        HotHeads
      </h2>
    </div>
  );
};
export default Logo;
