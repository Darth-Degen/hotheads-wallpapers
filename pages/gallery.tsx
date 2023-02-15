import {
  PageLayout,
  TabBar,
  ScrollItem,
  ListItem,
  ExpandIcon,
  Modal,
} from "@components";
import { RefObject, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { midExitAnimation, collections, midClickAnimation } from "@constants";
import Image from "next/image";

const Home: NextPage = () => {
  const [tabId, setTabId] = useState<number>(0);
  const [imageModal, setImageModal] = useState<string>("");
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const ref = useRef() as RefObject<HTMLDivElement> | undefined;

  const tabs: string[] = ["hot heads", "collab"];
  const handleTabChange = (tab: number) => {
    setTabId(tab);
  };

  const getId = (id: number): string => {
    if (id < 10) return ("00" + id) as string;
    return ("0" + id) as string;
  };

  return (
    <PageLayout header="Gallery">
      <div className="w-full h-full md:p-8 flex flex-col items-center gap-10">
        {/* toggle  */}
        <TabBar tabs={tabs} handleTabChange={handleTabChange} />
        {/* content */}
        <AnimatePresence mode="wait">
          {tabId === 0 ? (
            <motion.div
              className="overflow-y-hidden lg:overflow-y-auto overflow-x-hidden h-full flex flex-col gap-10 px-2 md:px-5"
              ref={ref}
              {...midExitAnimation}
              key="info"
            >
              {/* images */}
              <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-x-8 md:gap-y-4 md:px-6 xl:px-20">
                {collections.map((item, index) => (
                  <div
                    className="rounded-lg md:rounded-3xl relative"
                    key={index}
                  >
                    <ScrollItem>
                      <motion.div
                        className="absolute top-1.5 right-1.5 md:top-2.5 md:right-2.5 cursor-pointer hover:outline hover:outline-custom-black rounded-full transition-all duration-100"
                        onClick={() => setImageModal(item.src)}
                      >
                        <ExpandIcon size={25} />
                      </motion.div>
                      <Image
                        src={item.src}
                        alt={`HH-${index}`}
                        width={250}
                        height={250}
                        className="rounded-lg md:rounded-3xl"
                      />
                      <div className="font-mono text-center pt-4 text-xs">
                        Hot Heads
                      </div>
                      <div className="font-mono text-center  font-bold">
                        #{getId(index)}
                      </div>
                    </ScrollItem>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div {...midExitAnimation} key="lore">
              <ListItem>DEEZE NUTS</ListItem>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Modal
        show={imageModal.length > 0}
        close={setImageModal}
        contentLoaded={imageLoaded}
      >
        <Image
          src={imageModal.replace("-display", "")}
          fill={true}
          alt="Image"
          objectFit="contain"
          className={`rounded-3xl p-4 `}
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </Modal>
    </PageLayout>
  );
};

export default Home;
