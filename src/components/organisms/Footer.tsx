import { FC } from "react";
import { ExpIcon } from "@components";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="px-10 py-4 relative">
      <div className="flex items-center">
        <h2 className="w-1/3 font-pressStart mb-0.5 text-2xl bg-gradient-to-t from-red-500 to-yellow-300 text-transparent bg-clip-text">
          {/* <h2 className="w-1/3 font-pressStart mb-0.5 text-2xl text-orange-300"> */}
          HotHeads
        </h2>
        <div className="w-1/3 flex justify-center text-xs gap-8 font-daysOne">
          <div className="cursor-pointer hover:underline underline-offset-4">
            twitter
          </div>
          <div className="cursor-pointer hover:underline underline-offset-4">
            discord
          </div>
          <div className="cursor-pointer hover:underline underline-offset-4">
            about
          </div>
          <div className="cursor-pointer hover:underline underline-offset-4">
            inventory
          </div>
        </div>
        <div className="w-1/3 flex justify-end gap-2">
          {/* exp */}
          <div className="flex xl:w-1/4 justify-end ">
            <a
              className="relative cursor-pointer whitespace-nowrap"
              href="https://twitter.com/sol_exp"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" flex flex-col items-center font-daysOne">
                <div className={`rounded-lg text-3xl w-min border`}>
                  <ExpIcon color={"#fff"} />
                  {/* <Image
                    src="/images/exp/logo-white.png"
                    height={50}
                    width={50}
                    alt="EXP"
                  /> */}
                </div>
                <p className={`mt-1.5 text-white`}>powered by EXP</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>

    // <footer className="px-10 py-10 relative bg-gradient-to-t from-red-400 to-orange-300">
    //   <div className="flex flex-col md:flex-row items-center gap-6">
    //     {/* <h2 className="w-1/3 font-pressStart mb-0.5 text-2xl bg-gradient-to-t from-red-500 to-yellow-300 text-transparent bg-clip-text"> */}
    //     <h2 className="md:w-1/3 font-pressStart mb-0.5 text-2xl text-dark">
    //       HotHeads
    //     </h2>
    //     <div className="md:w-1/3 flex flex-col items-center justify-center text-custom-mid-gray text-sm font-pressStart">
    //       <motion.a
    //         transition={{ duration: 0.25, ease: "easeInOut" }}
    //         href="https://exchange.art/hot-heads/nfts"
    //         rel="noreferrer"
    //         target="_blank"
    //         className="p-2 w-[250px] text-center rounded-xs"
    //         whileHover={{
    //           textDecoration: "underline",
    //           textDecorationThickness: "3px",
    //         }}
    //       >
    //         Live Auctions
    //       </motion.a>
    //       <motion.a
    //         href="https://exchange.art/series/Hot%20Heads/nfts"
    //         rel="noreferrer"
    //         target="_blank"
    //         className="p-2 w-[250px] text-center rounded-xs"
    //         whileHover={{
    //           textDecoration: "underline",
    //           textDecorationThickness: "3px",
    //         }}
    //       >
    //         Exchange Art
    //       </motion.a>
    //       <motion.a
    //         href="https://magiceden.io/marketplace/hot_heads"
    //         rel="noreferrer"
    //         target="_blank"
    //         className="p-2 w-[250px] text-center rounded-xs"
    //         whileHover={{
    //           textDecoration: "underline",
    //           textDecorationThickness: "3px",
    //         }}
    //       >
    //         Magic Eden
    //       </motion.a>
    //     </div>
    //     <div className="md:w-1/3 flex justify-end gap-4">
    //       <DiscordIcon />
    //       <TwitterIcon />
    //     </div>
    //     <div className="md:absolute md:bottom-2 md:left-10 text-custom-mid-gray font-daysOne text-[10px]">
    //       Powered by EXP
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
