import { FC, useState } from "react";
import { ExpIcon } from "@components";
import Image from "next/image";
import { motion } from "framer-motion";
import { midEnterAnimation } from "@constants";
import Link from "next/link";

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
    <footer className="px-8 py-4 lg:pb-0 abolute bottom-0 bg-transparent w-screen">
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
          <div className="cursor-pointer ">
            {" "}
            <a
              href="https://discord.com/invite/hotheads"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/images/logo-discord.png"
                alt="Discord"
                width={288 / 7}
                height={189 / 7}
                className="transition-opacity duration-300 "
              />
            </a>
          </div>
          <div className="cursor-pointer">
            <a
              href="https://twitter.com/HotHeadsNFT"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/images/logo-twitter.png"
                alt="Twitter"
                width={213 / 7}
                height={213 / 7}
                className="transition-opacity duration-300 "
              />
            </a>
          </div>
          <div className="hidden md:block cursor-pointer">
            <Link href="/about">
              <Image
                src="/images/logo-about.png"
                alt="About"
                width={216 / 7}
                height={240 / 7}
                className="transition-opacity duration-300 "
              />
            </Link>
          </div>
          <div className="hidden md:block cursor-pointer">
            <Link href="/inventory">
              <Image
                src="/images/logo-inventory.png"
                alt="Inventory"
                width={216 / 7}
                height={189 / 7}
                className="transition-opacity duration-300 "
              />
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-end">
          {/* exp */}
          <a
            className="cursor-pointer whitespace-nowrap"
            href="https://twitter.com/sol_exp"
            target="_blank"
            rel="noreferrer"
          >
            <ExpIcon color={"white"} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
