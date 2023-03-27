import { FC, useState } from "react";
import { ExpIcon } from "@components";
import Image from "next/image";
import { motion } from "framer-motion";
import { midEnterAnimation } from "@constants";

const Footer: FC = () => {
  const [animate, setAnimate] = useState<boolean>(false);

  const containerAnimation = {
    animate: {
      opacity: 1,
      rotate: animate ? -90 : 0,
    },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <footer className="px-8 py-4 abolute lg:fixed bottom-0 w-full bg-transparent">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <motion.div
          className="md:w-1/3"
          // {...midEnterAnimation}
        >
          <Image
            src="/images/logo_base.png"
            width={3992 / 26}
            height={1560 / 26}
            alt="Logo"
          />
        </motion.div>
        <div className="md:w-1/3 flex flex-row items-center justify-center text-xs gap-4 lg:gap-8 font-daysOne text-gray-300">
          <div className="cursor-pointer hover:text-custom-yellow transition-all duration-500 ">
            twitter
          </div>
          <div className="cursor-pointer hover:text-custom-yellow transition-all duration-500 ">
            discord
          </div>
          <div className="hidden md:block cursor-pointer hover:text-custom-yellow transition-all duration-500 ">
            about
          </div>
          <div className="hidden md:block cursor-pointer hover:text-custom-yellow transition-all duration-500 ">
            inventory
          </div>
        </div>
        <div className="md:w-1/3 flex justify-end gap-2">
          {/* exp */}
          <div className="flex xl:w-1/4 justify-end ">
            <a
              className="relative cursor-pointer whitespace-nowrap"
              href="https://twitter.com/sol_exp"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" flex flex-row-reverse md:flex-col gap-2 md:gap-0 items-center font-daysOne">
                <div
                  className={`hidden md:block rounded-2xl text-3xl w-min border border-white px-3`}
                >
                  <motion.div
                    className="rounded"
                    {...containerAnimation}
                    onMouseEnter={() => setAnimate(true)}
                    onMouseLeave={() => setAnimate(false)}
                  >
                    <ExpIcon color={"white"} />
                  </motion.div>
                </div>
                <p className={`mt-1.5 text-white`}>Powered by EXP</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
