import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { collections } from "@constants";
import { Dropdown, InventoryItems, InventoryTabNav } from "@components";
import { Metadata } from "@metaplex-foundation/js";
import { useWallet } from "@solana/wallet-adapter-react";

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
  selectedToken: number;
  setSelectedToken: Dispatch<SetStateAction<number>>;
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
  // didHover: boolean;
  // setDidHover: Dispatch<SetStateAction<boolean>>;
}
const InventoryTabs: FC<InventoryTabsProps> = (props: InventoryTabsProps) => {
  const {
    hasToken = false,
    activeTab,
    setActiveTab,
    tokens,
    setImageModal,
    selectedToken,
    setSelectedToken,
    counter,
    setCounter,
    // didHover,
    // setDidHover,
  } = props;

  // const [didHover, setDidHover] = useState<boolean>(false);
  // const [selectedToken, setSelectedToken] = useState<number>(-1);
  // const [counter, setCounter] = useState<number>(0);

  const { publicKey } = useWallet();

  const selectClick = (id: number) => {
    setSelectedToken(id);
    // setDidHover(false);
  };

  useEffect(() => {
    if (publicKey) setSelectedToken(-1);
  }, [publicKey]);

  // //used to alternate views
  // useEffect(() => {
  //   setCounter((prevState) => prevState + 1);
  // }, [selectedToken, activeTab]);

  return (
    <div
      className="container flex flex-col w-full items-center justify-start min-h-[500px] h-full"
      // className="container flex flex-col w-full items-center justify-start "
    >
      <Dropdown
        handleClick={selectClick}
        // setDidHover={setDidHover}
        // didHover={didHover}
        label={
          selectedToken === -1
            ? "SELECT"
            : selectedToken < 10
            ? `00${selectedToken}`
            : `0${selectedToken}`
        }
        collections={collections}
        disabled={publicKey !== null}
      />
      <div className="flex flex-col md:flex-row gap-0.5 flex-wrap items-center justify-center md:gap-4 w-full pt-6 mr-[16px] lg:mr-auto">
        {_tabs.map((item: Tab, index) => (
          <InventoryTabNav
            key={`${item.name} ${index}`}
            item={item}
            index={index}
            isActive={activeTab === index}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      {/* multiple layouts resolve image duplication bug */}

      {/* drop down  */}
      {selectedToken > -1 && counter % 2 === 0 && (
        <InventoryItems
          hasToken={hasToken}
          activeTab={activeTab}
          selectedToken={selectedToken}
          setImageModal={setImageModal}
          tokens={tokens}
        />
      )}
      {/* drop down */}
      {selectedToken > -1 && counter % 2 === 1 && (
        <InventoryItems
          hasToken={hasToken}
          activeTab={activeTab}
          selectedToken={selectedToken}
          setImageModal={setImageModal}
          tokens={tokens}
        />
      )}
      {/* signed in */}
      {selectedToken === -1 && publicKey && counter % 2 === 0 && (
        <InventoryItems
          hasToken={hasToken}
          activeTab={activeTab}
          selectedToken={selectedToken}
          setImageModal={setImageModal}
          tokens={tokens}
        />
      )}
      {selectedToken === -1 && publicKey && counter % 2 === 1 && (
        <InventoryItems
          hasToken={hasToken}
          activeTab={activeTab}
          selectedToken={selectedToken}
          setImageModal={setImageModal}
          tokens={tokens}
        />
      )}
      {/* signed out */}
      {selectedToken === -1 && !publicKey && (
        <InventoryItems
          hasToken={hasToken}
          activeTab={activeTab}
          selectedToken={selectedToken}
          setImageModal={setImageModal}
          tokens={tokens}
        />
      )}
    </div>
  );
};

export default InventoryTabs;
