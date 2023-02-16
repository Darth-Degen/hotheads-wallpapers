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
        className="h-screen w-screen  bg-custom-black flex flex-col justify-evenly items-center"
        {...midEnterAnimation}
      >
        <h2 className="font-pressStart text-2xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-t from-red-600  to-yellow-300">
          {/* <h2 className="font-pressStart mt-3 text-2xl text-orange-300"> */}
          HotHeads
        </h2>
        {/* md + screens */}
        <div className="hidden md:block relative w-screen h-1/3 lg:h-1/2 2xl:h-[60%] px-0 mx-0">
          <Image
            src="/images/underworld.png"
            fill={true}
            alt="Underworld"
            objectFit="contain"
            className=""
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
        <Link href="/about">
          <div className="outline outline-2 rounded text-gray-300 outline-gray-300 px-5 py-2 cursor-pointer bg-custom-black hover:text-orange-300 hover:outline-orange-300 transition-all duration-500">
            Enter the Underworld
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Home;
