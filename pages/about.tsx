import { PageLayout, TabBar } from "@components";
import { FC, ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import {
  motion,
  useScroll,
  useInView,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { midExitAnimation } from "@constants";

const Home: NextPage = () => {
  // const [tokenId, setTokenId] = useState<number>(-1);
  const [scrollDown, setScrollDown] = useState<boolean>(true);
  const [tabId, setTabId] = useState<number>(0);

  const tabs: string[] = ["info", "lore"];

  //scroll direction
  const ref = useRef() as RefObject<HTMLDivElement> | undefined;
  const scrollRef = useRef<number>();
  const { scrollY } = useScroll({ container: ref });
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", scrollRef.current, latest);

    //first instance
    if (scrollRef.current === undefined) {
      scrollRef.current = latest;
      return;
    }

    //scroll down
    if (scrollRef.current < latest) {
      setScrollDown(true);
    }
    //scroll up
    else if (scrollRef.current > latest) {
      setScrollDown(false);
    }

    scrollRef.current = latest;
  });

  const handleTabChange = (tab: number) => {
    setTabId(tab);
  };

  // useEffect(() => {
  //   console.log("scrollDown ", scrollDown);
  // }, [scrollDown]);

  return (
    <PageLayout header="About">
      <div className="w-full h-full md:p-8 flex flex-col items-center gap-10">
        {/* toggle  */}
        <TabBar tabs={tabs} handleTabChange={handleTabChange} />

        <AnimatePresence mode="wait">
          {tabId === 0 ? (
            <motion.div
              className="overflow-y-hidden lg:overflow-y-auto overflow-x-hidden h-full flex flex-col gap-10 px-2 md:px-5"
              ref={ref}
              {...midExitAnimation}
              key="info"
            >
              <ScrollItem scrollDown={true}>
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem scrollDown={true}>
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem scrollDown={true}>
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem scrollDown={true}>
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem scrollDown={true}>
                <ListItem>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                </ListItem>
              </ScrollItem>
              <ScrollItem scrollDown={true}>
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

import Image from "next/image";
interface ListItemProps {
  children: ReactNode;
}
const ListItem: FC<ListItemProps> = (props: ListItemProps) => {
  const { children } = props;
  return (
    <div className="relative pl-10 lg:pl-14 ">
      <div className="absolute -left-4 top-1/2 transform -translate-y-[55%] w-12 h-12">
        <Image
          src="/images/head_transparent.png"
          alt="list"
          height={50}
          width={50}
        />
      </div>
      {children}
    </div>
  );
};

interface ScrollItemProps {
  children: ReactNode;
  index?: number;
  scrollDown: boolean;
}
const ScrollItem: FC<ScrollItemProps> = (props: ScrollItemProps) => {
  const { children, index = 0, scrollDown } = props;

  const ref = useRef(null);
  const isInView = useInView(ref);

  const animate = true;
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      // y: 0,
      transition: {
        // staggerChildren: 0.2,
        // staggerDirection: -1,
        delay: index * 0.5,
        ease: "easeInOut",
        duration: 1,
      },
    },
    hidden: {
      opacity: animate && scrollDown ? 0 : 1,
      scale: animate && scrollDown ? 1 : 1,
      // y: animate && scrollDown ? 100 : 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial={"hidden"}
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default Home;
