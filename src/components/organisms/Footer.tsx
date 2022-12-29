import { FC } from "react";
import { DiscordIcon, TwitterIcon } from "@components";
import { motion } from "framer-motion";
import { linkClickAnimation } from "@constants";

const Footer: FC = () => {
  return (
    // <footer className="px-10 py-8 relative border-t border-orange-300">
    //   <div className="flex items-center">
    //     <h2 className="w-1/3 font-pressStart mb-0.5 text-2xl bg-gradient-to-t from-red-500 to-yellow-300 text-transparent bg-clip-text">
    //       {/* <h2 className="w-1/3 font-pressStart mb-0.5 text-2xl text-orange-300"> */}
    //       HotHeads
    //     </h2>
    //     <div className="w-1/3 flex justify-center text-orange-300">
    //       HotHeads &copy; {new Date().getFullYear()}
    //     </div>
    //     <div className="w-1/3 flex justify-end gap-2">
    //       <DiscordIcon />
    //       <TwitterIcon />
    //     </div>
    //   </div>

    //   <div className="absolute left-1/2 transform -translate-x-1/2 bottom-1 font-daysOne text-sm">
    //     Powered by EXP
    //   </div>
    // </footer>

    <footer className="px-10 py-10 relative bg-gradient-to-t from-red-400 to-orange-300">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* <h2 className="w-1/3 font-pressStart mb-0.5 text-2xl bg-gradient-to-t from-red-500 to-yellow-300 text-transparent bg-clip-text"> */}
        <h2 className="md:w-1/3 font-pressStart mb-0.5 text-2xl text-dark">
          HotHeads
        </h2>
        <div className="md:w-1/3 flex flex-col gap-4 items-center justify-center text-customMidGray text-sm font-pressStart">
          <motion.a
            {...linkClickAnimation}
            href="https://exchange.art/hot-heads/nfts"
            rel="noreferrer"
            target="_blank"
          >
            Live Auctions
          </motion.a>
          <motion.a
            {...linkClickAnimation}
            href="https://exchange.art/series/Hot%20Heads/nfts"
            rel="noreferrer"
            target="_blank"
          >
            Exchange Art
          </motion.a>
          <motion.a
            {...linkClickAnimation}
            href="https://magiceden.io/marketplace/hot_heads"
            rel="noreferrer"
            target="_blank"
          >
            Magic Eden
          </motion.a>
        </div>
        <div className="md:w-1/3 flex justify-end gap-4">
          <DiscordIcon />
          <TwitterIcon />
        </div>
        <div className="md:absolute md:bottom-2 md:left-10 text-customMidGray font-daysOne">
          Powered by EXP
        </div>
      </div>
    </footer>
  );
};

export default Footer;
