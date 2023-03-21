import { PageHead } from "@components";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { midEnterAnimation } from "@constants";

const Home: NextPage = () => {
  return (
    <>
      <PageHead
        title="Hot Heads"
        description="Welcome to your Hot Heads asset portfolio"
      />
      <motion.div
        className="h-screen w-screen bg-custom-black flex flex-col justify-center items-center "
        {...midEnterAnimation}
      >
        <div className="px-12 md:px-8 flex-grow flex items-center ">
          <Image
            src="/images/logo_base.png"
            width={3992 / 10}
            height={1560 / 10}
            alt="Logo"
          />
        </div>
        {/* md + screens */}
        {/* <div className="hidden md:block relative w-screen h-1/3 lg:h-1/2 2xl:h-[70%] px-0 mx-0 py-10"> */}
        <div className="hidden md:block relative w-screen min-h-1/2">
          <Image
            src="/images/underworld.png"
            alt="Underworld"
            width={3000}
            height={1002}
          />
        </div>
        {/* sm - screens */}
        <div className="md:hidden relative w-full h-[60%]">
          <Image
            src="/images/underworld.png"
            fill={true}
            alt="Underworld"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="px-12 md:px-8 flex-grow flex items-center hover:saturate-200">
          <Link href="/about">
            <Image
              src="/images/enter_button.png"
              alt="Underworld"
              width={544 / 3}
              height={173 / 3}
              className="transition-all duration-200 opacity-70 hover:opacity-100"
            />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
