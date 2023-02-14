import { FC, ReactNode, useEffect, useState } from "react";
import { PageHead, Header, Footer, Navigation } from "@components";
import { motion } from "framer-motion";
import { midEnterAnimation, enterAnimation } from "@constants";

interface Props {
  children: ReactNode;
  header?: string;
}

const PageLayout: FC<Props> = (props: Props) => {
  const { children, header } = props;
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  return (
    <div className="relative flex flex-col justify-start min-h-screen lg:h-screen transition-colors ease-in-out duration-00 bg-dark overflow-none">
      <PageHead
        title="Hot Heads"
        description="Welcome to your Hot Heads asset portfolio"
      />

      <Navigation />
      <main className="flex flex-col flex-grow justify-start items-center h-full w-full px-8 md:px-16 lg:px-40 2xl:px-[15%] mb-44 lg:mb-auto lg:py-24">
        {didMount && (
          <>
            <Header />
            <div className="bg-custom-dark-gray h-full w-full rounded-2xl lg:rounded-[80px] flex flex-col items-center my-4 py-10 px-3  overflow-hidden ">
              {header && (
                <motion.h2
                  className="text-custom-yellow text-xl lg:text-4xl uppercase "
                  {...enterAnimation}
                >
                  {header}
                </motion.h2>
              )}
              <motion.div
                className=" lg:overflow-y-auto p-2"
                {...enterAnimation}
              >
                {children}
              </motion.div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};
export default PageLayout;
