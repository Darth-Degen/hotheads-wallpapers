import { FC } from "react";
import { Logo, MenuIcon, NavItem } from "@components";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { enterAnimation } from "@constants";

const Navigation: FC = () => {
  const router = useRouter();
  return (
    <header>
      {/* lg + screens */}
      <div className="hidden lg:block fixed left-0 h-full w-40 2xl:w-52">
        <div className="flex flex-col items-center justify-center h-full pt-4">
          <div className="h-[70px]">
            <Logo />
          </div>
          <div className="flex flex-col items-center justify-center pt-4 h-full pb-60 text-base 2xl:text-xl uppercase ">
            <NavItem href="/about">About</NavItem>
            <NavItem href="/gallery">Gallery</NavItem>
            <NavItem href="/inventory">Inventory</NavItem>
            <NavItem href="/merch" disabled={true}>
              Merch
            </NavItem>
            <NavItem href="/faq">FAQ</NavItem>
          </div>
        </div>
      </div>
      {/* md - screens */}
      <div className="lg:hidden flex justify-between px-4 md:px-8 py-2">
        <Logo />
        <MenuIcon />
      </div>
      {router.asPath === "/inventory" && (
        <motion.div
          className="absolute lg:fixed left-1/2 lg:left-auto -translate-x-1/2 lg:-translate-x-0 top-5 lg:right-10 z-10"
          {...enterAnimation}
        >
          <WalletMultiButton
            startIcon={undefined}
            className="!bg-[#FFB300] !text-sm !h-10 lg:!w-40 !bg-opacity-70 hover:!bg-opacity-90 !font-sans !rounded-sm
            !flex !justify-center transition-colors duration-200"
          />
        </motion.div>
      )}
    </header>
  );
};

export default Navigation;
