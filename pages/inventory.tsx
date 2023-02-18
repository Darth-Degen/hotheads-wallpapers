import { PageLayout } from "@components";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { AnimatePresence, motion } from "framer-motion";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { midExitAnimation } from "@constants";

const Home: NextPage = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  return (
    <PageLayout header="Inventory">
      <div className="w-full h-full md:p-6 flex flex-col items-center gap-8">
        <AnimatePresence mode="wait">
          {publicKey && connection ? (
            <motion.div className="" key="connected" {...midExitAnimation}>
              <div className="text-custom-green text-sm text-center">
                Connected
              </div>
            </motion.div>
          ) : (
            <motion.div className="" key="disconnected" {...midExitAnimation}>
              <div className="text-custom-green text-sm text-center">
                Connect wallet to view your specific Hot Heads Assets
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageLayout>
  );
};

export default Home;
