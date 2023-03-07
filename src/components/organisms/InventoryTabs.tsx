import { Dispatch, FC, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { inventory, midEnterAnimation } from "@constants";
import Image from "next/image";
import { Inventory } from "@types";
import { InventoryItem } from "@components";
import { FindNftsByOwnerOutput } from "@metaplex-foundation/js";

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
  tokens: FindNftsByOwnerOutput[] | undefined;
}

const InventoryTabs: FC<InventoryTabsProps> = (props: InventoryTabsProps) => {
  const { hasToken, activeTab, setActiveTab, tokens } = props;
  const tabs: string[] = ["pfp", "banners", "wallpapers", "memes"];

  console.log("hasToken ", hasToken);
  return (
    <div
      className="flex flex-col w-full font-mono items-center justify-start bg-custom-black 
    rounded md:rounded-2xl lg:rounded-[80px py-8 min-h-[300px] px-2"
    >
      <div className="flex gap-0.5 items-start justify-center md:gap-4 w-full py-2">
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
      <AnimatePresence mode="wait">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5  items-center justify-center gap-4 gap-x-6 overflow-x-clip overflow-y-auto h-full px-4 py-8"
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
                  <InventoryItem key={index} src={src} />
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
