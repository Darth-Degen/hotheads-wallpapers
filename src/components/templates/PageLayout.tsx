import { FC, ReactNode } from "react";
import { PageHead, Header, Footer, Navigation } from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation } from "@constants";

interface Props {
  children: ReactNode;
  header?: string;
}

const PageLayout: FC<Props> = (props: Props) => {
  const { children, header } = props;
  return (
    <div
      className="relative flex flex-col justify-start min-h-screen lg:h-screen transition-colors ease-in-out duration-00 bg-dark overflow-none"
      // {...midEnterAnimation}
    >
      <PageHead
        title="Hot Heads"
        description="Welcome to your Hot Heads asset portfolio"
      />

      <Navigation />
      <main className="flex flex-col flex-grow justify-start items-center h-full w-full px-8 md:px-16 lg:px-36">
        <Header />
        <motion.div
          className="bg-custom-dark-gray h-full w-full rounded-xl lg:rounded-3xl flex flex-col items-center my-4 py-10 overflow-y-auto"
          {...midEnterAnimation}
        >
          {header && (
            <h2 className="text-orange-300 text-xl lg:text-4xl">{header}</h2>
          )}
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};
export default PageLayout;
