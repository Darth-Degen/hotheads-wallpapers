import { PageLayout, TabBar, ScrollItem, ListItem } from "@components";
import { RefObject, useRef, useState } from "react";
import { NextPage } from "next";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { midExitAnimation } from "@constants";

const About: NextPage = () => {
  const [scrollDown, setScrollDown] = useState<boolean>(true);
  const [tabId, setTabId] = useState<number>(0);

  const tabs: string[] = ["info", "lore"];

  //scroll direction
  const ref = useRef() as RefObject<HTMLDivElement> | undefined;

  // const scrollRef = useRef<number>();
  // const { scrollY } = useScroll({ container: ref });
  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   // console.log("Page scroll: ", scrollRef.current, latest);

  //   //first instance
  //   if (scrollRef.current === undefined) {
  //     scrollRef.current = latest;
  //     return;
  //   }

  //   //scroll down
  //   if (scrollRef.current < latest) {
  //     setScrollDown(true);
  //   }
  //   //scroll up
  //   else if (scrollRef.current > latest) {
  //     setScrollDown(false);
  //   }

  //   scrollRef.current = latest;
  // });

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
              ref={ref}
              {...midExitAnimation}
              key="info"
            >
              <ScrollItem>
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem>
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem>
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem>
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem>
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem>
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
