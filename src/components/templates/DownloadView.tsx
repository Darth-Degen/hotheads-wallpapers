import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Form, MobileDisplay } from "@components";
import { Collection } from "@types";
// import * as htmlToImage from "html-to-image";
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
      <MobileDisplay
        background={background}
        showLogo={showLogo}
        tokenId={tokenId}
        isLoading={isLoading}
        text={text}
        src={src}
      />
    </div>
  );
};
export default DownloadView;
