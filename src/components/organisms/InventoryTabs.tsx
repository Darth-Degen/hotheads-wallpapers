import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { collections, inventory, midEnterAnimation } from "@constants";
import Image from "next/image";
import { Inventory } from "@types";
import { Dropdown, InventoryItem } from "@components";
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
    name: "Memes",
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
const InventoryTabs: FC<InventoryTabsProps> = (props: InventoryTabsProps) => {
  const {
    hasToken = false,
    activeTab,
    setActiveTab,
    tokens,
    setImageModal,
  } = props;
  const tabs: string[] = ["pfp", "banners", "wallpapers", "memes"];

  const [didHover, setDidHover] = useState<boolean>(false);
  const [selecetdToken, setSelectedToken] = useState<number>(-1);

  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const selectClick = (id: number) => {
    setSelectedToken(id);
    setDidHover(false);
  };

  useEffect(() => {
    if (publicKey) setSelectedToken(-1);
  }, [publicKey]);

  return (
    <div
      className="container flex flex-col w-full  items-center justify-start 
    rounded md:rounded-2xl lg:rounded-[80px] py-8 min-h-[500px] lg:min-h-[560px] xl:min-h-[580px] 2xl:min-h-[600px]  px-2"
    >
      <Dropdown
        handleClick={selectClick}
        setDidHover={setDidHover}
        didHover={didHover}
        label={
          selecetdToken === -1
            ? "SELECT"
            : selecetdToken < 10
            ? `00${selecetdToken}`
            : `0${selecetdToken}`
        }
        collections={collections}
        disabled={hasToken}
      />
      <div className="flex flex-col md:flex-row gap-0.5 flex-wrap items-center justify-center md:gap-4 w-full pt-6">
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
      <motion.div
        className="container-child flex flex-wrap items-center justify-center gap-4 gap-x-6 overflow-x-clip overflow-y-auto h-full px-4 md:px-10 py-8"
        // className="container-child grid auto-cols-auto items-center justify-center gap-4 gap-x-6 overflow-x-clip overflow-y-auto h-full px-4 md:px-10 py-8"
        key="inventory-grid"
        {...midEnterAnimation}
      >
        {inventory
          .filter((filterItem) => {
            //show user assets if connected
            if (
              selecetdToken === -1 &&
              connection &&
              publicKey &&
              tokens &&
              tokens.reduce((hit, tok) => {
                // console.log("tok?.name ", tok?.name);
                if (tok?.name === filterItem.hash) {
                  return true;
                }
                return hit;
              }, false)
            ) {
              return true;
            }
            //show assets if selected
            if (selecetdToken > -1 && filterItem.id === selecetdToken) {
              return true;
            } else if (selecetdToken > -1 && filterItem.id !== selecetdToken) {
              return false;
            }
            //show all if disconnected
            if (!connection || !publicKey || (publicKey && !hasToken)) {
              return true;
            }
          })
          .map((item: Inventory, index: number) => {
            console.log("PRE Map");
            if (
              item[tabs[activeTab] as keyof Inventory] &&
              Array.isArray(item[tabs[activeTab] as keyof Inventory])
            ) {
              if (
                (selecetdToken > -1 || (publicKey && hasToken)) &&
                //@ts-ignore
                item[tabs[activeTab] as keyof Inventory].length === 0
              ) {
                return (
                  <div key="empty" className="text-xs">
                    NO ASSETS FOUND FOR {item.id}
                  </div>
                );
              }
              //@ts-ignore
              if (item[tabs[activeTab] as keyof Inventory].length > 0) {
                //@ts-ignore
                return item[tabs[activeTab] as keyof Inventory].map(
                  (src: string) => (
                    <InventoryItem
                      key={item.id}
                      src={src}
                      isBanner={activeTab === 1}
                      setImageModal={setImageModal}
                      index={selecetdToken > -1 ? selecetdToken : item.id}
                      activeTab={activeTab}
                    />
                  )
                );
              }
            }
          })}
      </motion.div>
    </div>
  );
};

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

export default InventoryTabs;
