import { FC } from "react";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <div className="my-2 flex items-end gap-1 text-gray-200 transition-colors ease-in-out duration-500">
      <Image
        src="/images/head_transparent.png"
        height={40}
        width={40}
        alt="hot head icon"
      />
      <Image
        src="/images/logo_base.png"
        height={40}
        width={200}
        alt="hot head logo"
      />
    </div>
  );
};
export default Logo;
