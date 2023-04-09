import Head from "next/head";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const PageHead: FC<Props> = (props: Props) => {
  const { title, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@HotHeadsNFT" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://hotheads.art/meta.png" />
      <meta property="twitter:url" content={`https://hotheads.art`} />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hotheads.art" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/meta.png" />
    </Head>
  );
};

export default PageHead;
