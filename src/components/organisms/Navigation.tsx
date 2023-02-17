import { FC } from "react";
import { Logo, MenuIcon, NavItem } from "@components";

const Navigation: FC = () => {
  return (
    <header>
      {/* lg + screens */}
      <div className="hidden lg:block fixed left-0 h-full w-40 2xl:w-52">
        <div className="flex flex-col items-center justify-center h-full pt-4">
          <Logo />
          <div className="flex flex-col items-center justify-center pt-4 h-full pb-60  text-lg 2xl:text-xl uppercase ">
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
    </header>
  );
};

export default Navigation;
