import { Dispatch, FC, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { inventory, midEnterAnimation } from "@constants";
import Image from "next/image";
import { Inventory } from "@types";
import { InventoryItem } from "@components";
import { Metadata } from "@metaplex-foundation/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

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
  tokens: Metadata[] | undefined;
  setImageModal: Dispatch<SetStateAction<string>>;
}
interface InventoryTabNavProps {
  index: number;
  item: Tab;
  isActive: boolean;
  setActiveTab: Dispatch<SetStateAction<number>>;
}
const InventoryTabNav: FC<InventoryTabNavProps> = (
  props: InventoryTabNavProps
) => {
  const { index, item, setActiveTab, isActive } = props;

  const [didHover, setDidHover] = useState<boolean>(false);

  return (
    <div
      className={`flex items-center text-xs sm:text-sm cursor-pointer text-transparent bg-clip-text transition-all duration-500  py-1.5 px-4 rounded gap-1.5  ${
        isActive ? "bg-red-text-gradient " : "bg-white-text-gradient"
      }`}
      key={index}
      onClick={() => setActiveTab(index)}
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
    >
      <div className={`transition-all duration-500`}>
        <Image
          src="/images/arrow.png"
          alt="arrow"
          width={14}
          height={22}
          className={`transition-all duration-300  ${
            didHover || isActive ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <p className="">{item.name}</p>
    </div>
  );
};
const InventoryTabs: FC<InventoryTabsProps> = (props: InventoryTabsProps) => {
  const { activeTab, setActiveTab, tokens, setImageModal } = props;
  const tabs: string[] = ["pfp", "banners", "wallpapers", "memes"];

  const { connection } = useConnection();
  const { publicKey } = useWallet();

  return (
    <div
      className="container flex flex-col w-full  items-center justify-start 
    rounded md:rounded-2xl lg:rounded-[80px] py-8 min-h-[500px] lg:min-h-[560px] px-2"
    >
      <div className="flex flex-col md:flex-row gap-0.5 flex-wrap items-center justify-center md:gap-4 w-full py-2">
        {_tabs.map((item: Tab, index) => (
          <InventoryTabNav
            key={index}
            item={item}
            index={index}
            isActive={activeTab === index}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          className="container-child flex flex-wrap items-center justify-center gap-4 gap-x-6 overflow-x-clip overflow-y-auto h-full px-4 md:px-10 py-8"
          key="inventory-grid"
          {...midEnterAnimation}
        >
          {inventory
            .filter((filterItem) => {
              //show user assets if selected
              if (
                connection &&
                publicKey &&
                tokens &&
                tokens.reduce((hit, tok) => {
                  if (tok?.name === filterItem.hash) {
                    return true;
                  }
                  return hit;
                }, false)
              ) {
                return true;
              }
              //show all if disconnected
              if (!connection || !publicKey) {
                return true;
              }
            })
            .map((item: Inventory) => {
              if (
                item[tabs[activeTab] as keyof Inventory] &&
                Array.isArray(item[tabs[activeTab] as keyof Inventory])
              ) {
                //@ts-ignore
                return item[tabs[activeTab] as keyof Inventory].map(
                  (src: string, index: number) => (
                    <InventoryItem
                      key={index}
                      src={src}
                      isBanner={activeTab === 1}
                      setImageModal={setImageModal}
                    />
                  )
                );
              }
            })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InventoryTabs;
