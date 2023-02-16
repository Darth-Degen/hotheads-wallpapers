import { PageLayout, TabBar, ScrollItem, ListItem } from "@components";
import { useState } from "react";
import { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { midExitAnimation } from "@constants";

const About: NextPage = () => {
  const [tabId, setTabId] = useState<number>(0);

  const tabs: string[] = ["info", "lore"];

  const handleTabChange = (tab: number) => {
    setTabId(tab);
  };

  return (
    <PageLayout header="About">
      <div className="w-full h-full md:p-8 flex flex-col items-center gap-10">
        {/* toggle  */}
        <TabBar tabs={tabs} handleTabChange={handleTabChange} />
        {/* content */}
        <AnimatePresence mode="wait">
          {tabId === 0 ? (
            <motion.div
              className="overflow-y-hidden lg:overflow-y-auto overflow-x-hidden h-full flex flex-col gap-10 px-2 md:px-5"
              {...midExitAnimation}
              key="info"
            >
              <ScrollItem key="info-1">
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem key="info-2">
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem key="info-3">
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem key="info-4">
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem key="info-5">
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem key="info-6">
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
            </motion.div>
          ) : (
            <motion.div {...midExitAnimation} key="lore">
              <ListItem>DEEZE NUTS</ListItem>
            </motion.div>
          )}
        </AnimatePresence>
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

export default About;
