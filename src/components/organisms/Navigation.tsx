import { FC } from "react";
import { Logo } from "@components";

const Navigation: FC = () => {
  return (
    <header className="fixed left-0 h-full w-36">
      <div className="flex flex-col items-center justify-center h-full pt-4">
        <Logo />
        <div className="flex flex-col items-center justify-center gap-10  pt-4 h-full pb-60 text-orange-300">
          <div className="cursor-pointer hover:underline underline-offset-4">
            About{" "}
          </div>
          <div className="cursor-pointer hover:underline underline-offset-4">
            Gallery{" "}
          </div>
          <div className="cursor-pointer hover:underline underline-offset-4">
            Inventory{" "}
          </div>
          <div className="cursor-pointer hover:underline underline-offset-4">
            Merch{" "}
          </div>
          <div className="cursor-pointer hover:underline underline-offset-4">
            FAQ{" "}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
