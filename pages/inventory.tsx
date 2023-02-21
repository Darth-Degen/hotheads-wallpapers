import { PageLayout } from "@components";
import { useCallback, useEffect, useMemo, useState } from "react";
import { NextPage } from "next";
import { AnimatePresence, motion } from "framer-motion";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { midExitAnimation } from "@constants";
import { getTokensByOwner } from "@helpers";
import { TokenAccount } from "@types";
import {
  Metadata,
  JsonMetadata,
  Nft,
  Sft,
  FindNftsByOwnerOutput,
} from "@metaplex-foundation/js";
import axios from "axios";
import Image from "next/image";

const Home: NextPage = () => {
  const [didMount, setDidMount] = useState<boolean>(false);
  const [metadata, setMetadata] = useState<
    FindNftsByOwnerOutput[] | undefined
  >();

  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const getTokens = useCallback(async () => {
    try {
      //fetch tokens
      const tokens = await getTokensByOwner(connection, publicKey);

      if (!tokens) return;

      //fetch metadata
      const jsonArr = await Promise.all(
        tokens.map(async (element) => {
          const uri = element.uri;
          return await axios.get(uri).then((r) => {
            return r.data;
          });
        })
      );
      setMetadata(jsonArr);
      console.log("jsonArr ", jsonArr);
    } catch (e) {
      console.error("getTokens ", e);
    }
  }, [connection, publicKey]);

  useEffect(() => {
    getTokens();
  }, [getTokens]);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    <PageLayout header="Inventory">
      {didMount && (
        <>
          <div className="w-full h-full md:p-6 flex flex-col items-center gap-8">
            <AnimatePresence mode="wait">
              {publicKey && connection ? (
                <motion.div className="" key="connected" {...midExitAnimation}>
                  <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-x-8 md:gap-y-3 md:px-6 xl:px-20">
                    {metadata &&
                      metadata.map((item, index) => (
                        <div key={index} className="flex flex-col">
                          <Image
                            src={item.image}
                            alt={`NFT-${index}`}
                            width={200}
                            height={200}
                            className="rounded-lg md:rounded-3xl"
                          />
                          <motion.p className="font-mono text-center pt-3 w-full whitespace-nowrap text-xs">
                            Hot Heads
                          </motion.p>
                          <div className="font-mono text-center font-bold">
                            {item.name}
                          </div>
                        </div>
                      ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className=""
                  key="disconnected"
                  {...midExitAnimation}
                >
                  <div className="text-custom-green text-sm text-center">
                    Connect wallet to view your specific Hot Heads Assets
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default Home;
