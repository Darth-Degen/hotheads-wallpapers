import { PageLayout, TabBar } from "@components";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { NextPage } from "next";
import { motion, useScroll, useInView } from "framer-motion";

const Home: NextPage = () => {
  const [tokenId, setTokenId] = useState<number>(-1);

  return (
    <PageLayout header="About">
      <div className="w-full h-full p-8 flex flex-col items-center gap-10 overflow-y-auto">
        {/* toggle  */}
        <TabBar tabs={["info", "lore"]} />
        <div className="overflow-y-auto overflow-x-hidden h-full flex flex-col gap-10 px-5">
          <ScrollItem index={0}>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </ScrollItem>
          <ScrollItem index={0}>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </ScrollItem>
          <ScrollItem index={0}>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </ScrollItem>
          <ScrollItem>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </ScrollItem>
          <ScrollItem>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </ScrollItem>
          <ScrollItem>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </ScrollItem>
        </div>
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

interface Props {
  children: ReactNode;
  index?: number;
}
const ScrollItem: FC<Props> = (props: Props) => {
  const { children, index = 0 } = props;
  const [scrollDown, setScrollDown] = useState<boolean>(true);

  const ref = useRef(null);
  const scrollRef = useRef<number>();

  const isInView = useInView(ref);
  const { scrollY } = useScroll();

  const animate = true;
  const boxVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
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
      // y: animate ? (scrollDown ? 100 : -100) : 0,
      y: animate && scrollDown ? 100 : 0,
    },
  };

  useEffect(() => {
    console.log("scrollDown ", scrollDown);
  }, [scrollDown]);

  useEffect(() => {
    console.log("scrollY ", scrollY);
    return scrollY.onChange((latest) => {
      //top of page
      console.log("latest ", latest);
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
  }, [scrollY]);

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
