import { FC } from "react";
import { Logo, MenuIcon } from "@components";

const Navigation: FC = () => {
  return (
    <header>
      {/* lg + screens */}
      <div className="hidden lg:block fixed left-0 h-full w-40 2xl:w-52">
        <div className="flex flex-col items-center justify-center h-full pt-4">
          <Logo />
          <div className="flex flex-col items-center justify-center gap-10 pt-4 h-full pb-60 text-gray-300 text-lg 2xl:text-xl uppercase">
            <div className="cursor-pointer hover:underline underline-offset-4">
              About
            </div>
            <div className="cursor-pointer hover:underline underline-offset-4">
              Gallery
            </div>
            <div className="cursor-pointer hover:underline underline-offset-4">
              Inventory
            </div>
            <div className="cursor-pointer hover:underline underline-offset-4">
              Merch
            </div>
            <div className="cursor-pointer hover:underline underline-offset-4">
              FAQ
            </div>
          </div>
        </div>
      </div>
      {/* md - screens */}
      <div className="lg:hidden flex justify-between px-4 md:px-8 py-2">
        <Logo />
        <MenuIcon />
      </div>
    </header>
  );
};

export default Navigation;
