import { PageLayout } from "@components";
import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { NextPage } from "next";
import { AnimatePresence, motion } from "framer-motion";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { midExitAnimation, inventory, midEnterAnimation } from "@constants";
import { getTokensByOwner } from "@helpers";
import { FindNftsByOwnerOutput } from "@metaplex-foundation/js";
import axios from "axios";
import Image from "next/image";
import { Inventory, InventoryItem } from "src/types";

const Home: NextPage = () => {
  const [didMount, setDidMount] = useState<boolean>(false);
  const [metadata, setMetadata] = useState<
    FindNftsByOwnerOutput[] | undefined
  >();
  const [error, setError] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const getTokens = useCallback(async () => {
    try {
      //fetch tokens
      const tokens = await getTokensByOwner(connection, publicKey);
      if (!tokens) return;

      //fetch metadata
      const jsonArr: FindNftsByOwnerOutput[] = [];
      await Promise.all(
        tokens.map(async (token) => {
          if (token.name.includes("Hot Head")) {
            const uri = token.uri;
            // console.log(token.name);
            await axios.get(uri).then((r) => {
              // console.log(uri, r.data);
              jsonArr.push(r.data);
            });
          }
        })
      );
      setMetadata(jsonArr);
    } catch (e: any) {
      console.error("getTokens ", e.message);
      setError(true);
    }
  }, [connection, publicKey]);

  useEffect(() => {
    getTokens();
  }, [getTokens]);

  useEffect(() => {
    setDidMount(true);
  }, []);
  //reset data on disconnect
  useEffect(() => {
    if (!connection || !publicKey) {
      setMetadata(undefined);
    }
    setError(false);
  }, [connection, publicKey]);

  return (
    <PageLayout header="Inventory">
      {didMount && (
        <div className="h-full px-0 md:px-6 lg:px-10 flex flex-col w-full items-center gap-4">
          <div className="text-sm text-center h-6 py-7 md:pt-6 md:pb-4 flex flex-col w-full items-center justify-center">
            <AnimatePresence mode="wait">
              {error && (
                <div className="text-red-500 text-sm text-center">
                  Error retrieving NFTs
                </div>
              )}
              {/* has hot head */}
              {publicKey &&
                connection &&
                !error &&
                metadata &&
                metadata.length > 0 && (
                  <motion.div
                    className="flex gap-0.5 md:gap-4 w-full font-mono items-start justify-center bg-custom-black 
                      rounded md:rounded-2xl h-[150px] px-2"
                    key="connected"
                    {...midExitAnimation}
                  >
                    {/* <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-x-8 md:gap-y-3 md:px-6 xl:px-20">
                      {metadata.map((item: any, index) => (
                        <div key={index} className="flex flex-col">
                          <p className="font-mono text-center pt-3 w-full whitespace-nowrap text-xs">
                            {item.name}
                          </p>
                        </div>
                      ))}
                    </div> */}
                  </motion.div>
                )}
              {/* no hot heads found */}
              {publicKey &&
                connection &&
                !error &&
                metadata &&
                metadata.length === 0 && (
                  <div className="text-red-500 ">No Hot Heads found</div>
                )}
              {/* error fetching nfts */}
              {publicKey && connection && error && (
                <div className="text-red-500">Error fetching NFTs</div>
              )}
              {/* not signed in */}
              {(!publicKey || !connection) && !error && (
                <motion.div
                  className=""
                  key="disconnected"
                  {...midExitAnimation}
                >
                  <div className="text-custom-green text-sm text-center h-6 py-7 md:pt-6 md:pb-4 flex flex-col w-full  items-center justify-center">
                    Connect wallet to view your Hot Heads
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <InventoryTabs
            hasToken={metadata && metadata.length > 0}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}
    </PageLayout>
  );
};

interface Tab {
  name: string;
  icon: string;
}

const _tabs: Tab[] = [
  {
    name: "PFP",
    icon: "user.svg",
  },
  {
    name: "Banners",
    icon: "image.svg",
  },
  {
    name: "Wallpapers",
    icon: "laptop.svg",
  },
  {
    name: "Memes & Gifs",
    icon: "smiley.svg",
  },
];

interface InventoryTabsProps {
  hasToken?: boolean;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const InventoryTabs: FC<InventoryTabsProps> = (props: InventoryTabsProps) => {
  const { hasToken, activeTab, setActiveTab } = props;
  const [tabName, setTabName] = useState<string>();

  const tabs: string[] = ["pfp", "banners", "wallpapers", "memes"];

  // const PFP

  return (
    <div
      className="flex flex-col w-full font-mono items-center justify-start bg-custom-black 
    rounded md:rounded-2xl lg:rounded-[80px py-8 min-h-[300px] px-2"
    >
      <div className="flex gap-0.5 items-start justify-center md:gap-4 w-full">
        {_tabs.map((item: Tab, index) => (
          <div
            className={`text-xs sm:text-sm cursor-pointer transition duration-300 py-1.5 px-4 rounded flex gap-1.5  ${
              activeTab === index
                ? "bg-[#FFB300] text-white"
                : "hover:text-white text-gray-400"
            }`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            <Image
              src={`/images/icons/${item.icon}`}
              width={20}
              height={20}
              alt={item.name}
              className="hidden sm:block"
            />
            <p className="sm:whitespace-nowrap">{item.name}</p>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 md:gap-x-8 md:gap-y-3 md:px-6 xl:px-20 py-5 overflow-y-auto"> */}
      <AnimatePresence mode="wait">
        <motion.div
          className="flex flex-wrap gap-4 overflow-x-clip overflow-y-auto h-full px-4 py-8"
          key="inventory-grid"
          {...midEnterAnimation}
        >
          {inventory.map((item: Inventory) => {
            if (
              item[tabs[activeTab] as keyof Inventory] &&
              Array.isArray(item[tabs[activeTab] as keyof Inventory])
            ) {
              //@ts-ignore
              return item[tabs[activeTab] as keyof Inventory].map(
                (src: string, index: number) => (
                  <motion.div
                    className="rounded-xl"
                    key={index}
                    {...midEnterAnimation}
                  >
                    <Image
                      src={src}
                      alt="Inventory"
                      width={200}
                      height={200}
                      className="rounded-xl"
                    />
                  </motion.div>
                )
              );
            }
            // return <div className="bg-red-800 ">{item.id}</div>;
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
