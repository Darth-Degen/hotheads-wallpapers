import { PageLayout, DownloadView } from "@components";
import { collections } from "@constants";
import { useEffect, useState } from "react";
import { NextPage } from "next";

const Home: NextPage = () => {
  const [didMount, setDidMount] = useState<boolean>(false);
  const [tokenId, setTokenId] = useState<number>(0);

  useEffect(() => {
    setDidMount(true);
  }, []);
  return (
    <PageLayout>
      <h1 className="text-3xl font-mono pt-10">
        Download your HotHeads Wallpaper
      </h1>
      {didMount && (
        <DownloadView
          collection={collections[0]}
          tokenId={tokenId}
          setTokenId={setTokenId}
        />
      )}
    </PageLayout>
  );
};

export default Home;
