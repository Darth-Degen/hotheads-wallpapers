import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { LoadAnimation, Form } from "@components";
import { Collection } from "@types";
import { fastExitAnimation, exitAnimation } from "@constants";
import Image from "next/image";
// import * as htmlToImage from "html-to-image";
import { motion, useDragControls } from "framer-motion";
import download from "downloadjs";
import "dear-image.detect-background-color";
//@ts-ignore
import DearImage from "dear-image";
import html2canvas from "html2canvas";

interface Props {
  collection: Collection;
  tokenId: number;
  setTokenId: Dispatch<SetStateAction<number>>;
}

const DownloadView: FC<Props> = (props: Props) => {
  const { collection, tokenId, setTokenId } = props;
  const [text, setText] = useState<string>("");
  const [showLogo, setShowLogo] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const timeoutRef = useRef<NodeJS.Timeout>();
  const controls = useDragControls();

  const [background, setBackground] = useState<string>("bg-[#CF1714]");

  const src = `${
    collection.url +
    (tokenId - 1) +
    (collection.url.includes("degods") ? "-dead" : "")
  }.png`;

  //download image
  const handleDownload = async () => {
    const scale = { scale: 12 };
    const element = document.getElementById("wallpaper");

    if (element) {
      await html2canvas(element, scale).then((canvas) => {
        const data = canvas.toDataURL("image/png");
        download(data, "degen-wallpaper.png", "image/png");
      });
    }
  };

  //extract background from image
  const getBackground = useCallback(async () => {
    let url = src;
    let imgObj = new window.Image();
    imgObj.src = url + "?" + new Date().getTime();
    imgObj.setAttribute("crossOrigin", "");
    let bg = await DearImage.detectBackgroundColor(imgObj);
    setBackground(bg);
  }, [src]);

  useEffect(() => {
    getBackground();
  }, [getBackground]);

  const handleLoad = useCallback(() => {
    if (!tokenId || !collection) return;

    setIsLoading(true);
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [tokenId, collection]);

  useEffect(() => {
    handleLoad();
    return () => clearTimeout(timeoutRef.current);
  }, [handleLoad]);

  return (
    <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 items-start pt-10">
      <Form
        tokenId={tokenId}
        isLoading={isLoading}
        setTokenId={setTokenId}
        setShowLogo={setShowLogo}
        setText={setText}
        handleDownload={handleDownload}
      />

      {/* mobile border */}
      <div className="bg-orange-300 p-0.5 rounded-3xl">
        <div className="overflow-hidden p-2.5">
          <div className="relative rounded-2xl h-[562.5px] w-[275px] ">
            {/* mobile frame */}
            <div className="absolute rounded-2xl h-[562.5px] w-[275px] outline outline-[11px] outline-dark z-50" />
            <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-5 w-20 bg-dark rounded-b-lg z-50" />
            {tokenId > 0 && (
              <>
                {isLoading ? (
                  <motion.div key="loading" {...exitAnimation}>
                    <LoadAnimation />
                  </motion.div>
                ) : (
                  <>
                    <motion.div
                      key="wallpaper"
                      id="wallpaper"
                      className={`flex flex-col justify-end items-center h-full transition-colors ease-in-out duration-200 z-20`}
                      style={{ backgroundColor: background }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <motion.img
                        src={"/images/logo_base.png"}
                        height={40}
                        width={200}
                        alt="Logo"
                        className={`pt-24 px-6 z-50 cursor-pointer ${
                          showLogo ? "visbile" : "invisible"
                        }`}
                        drag
                        dragControls={controls}
                      />
                      <motion.p
                        className="motion.px-5 py-2 cursor-pointer text-black text-center font-mono z-50 "
                        drag
                        dragControls={controls}
                      >
                        {text}
                      </motion.p>
                      {/* token image */}
                      <motion.div
                        {...fastExitAnimation}
                        className="transition-all ease-in-out duration-500  rounded-b-2xl"
                        id="token-image"
                        style={{ backgroundColor: background }}
                      >
                        <Image
                          src={src}
                          height={500}
                          width={500}
                          alt="NFT"
                          className="rounded-b-2xl"
                        />
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DownloadView;
