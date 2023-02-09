import { FC } from "react";
import { Logo, ThemeChanger } from "@components";

const Header: FC = () => {
  return (
    <div className="h-0 lg:h-20 w-full">
      <div className="px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* <Logo /> */}
      </div>
    </div>
  );
};

export default Header;
