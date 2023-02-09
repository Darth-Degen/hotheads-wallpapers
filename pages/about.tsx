import { PageLayout } from "@components";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  const [didMount, setDidMount] = useState<boolean>(false);
  const [tokenId, setTokenId] = useState<number>(-1);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    <PageLayout header="About">
      <div className="w-full h-full p-8">
        {/* toggle  */}
        <TabBar />
      </div>
      {/* <h1 className="text-xl lg:text-3xl font-pressStart md:pb-10 text-red-400 text-center px-5">
        Download your <br />
        <span className="text-orange-300"> HotHeads Wallpaper</span>
      </h1>
      {didMount && (
        <DownloadView
          collection={collections[0]}
          tokenId={tokenId}
          setTokenId={setTokenId}
        />
      )} */}
    </PageLayout>
  );
};

const TabBar: FC = () => {
  const [tab, setTab] = useState<number>(0);
  return (
    <div className=" bg-custom-light-gray rounded-3xl flex gap-1 items-center p-1.5">
      <Tab id={0} isSelected={tab === 0} handleClick={setTab}>
        Info
      </Tab>
      <Tab id={1} isSelected={tab === 1} handleClick={setTab}>
        Lore
      </Tab>
    </div>
  );
};

interface TabProps {
  id: number;
  children: ReactNode;
  isSelected: boolean;
  handleClick: Dispatch<SetStateAction<number>>;
}
const Tab: FC<TabProps> = (props: TabProps) => {
  const { id, children, isSelected, handleClick } = props;
  return (
    <div
      className={`w-20 text-center rounded-3xl p-2 cursor-pointer transition-all duration-300 uppercase ${
        isSelected ? "bg-custom-dark-gray " : "bg-custom-light-gray"
      }`}
      onClick={() => handleClick(id)}
    >
      {children}
    </div>
  );
};
export default Home;
