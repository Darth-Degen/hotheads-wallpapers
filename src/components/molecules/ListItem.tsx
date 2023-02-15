import { FC, ReactNode } from "react";
import Image from "next/image";

interface ListItemProps {
  children: ReactNode;
}
const ListItem: FC<ListItemProps> = (props: ListItemProps) => {
  const { children } = props;
  return (
    <div className="relative pl-10 lg:pl-14 ">
      <div className="absolute -left-4 top-1/2 transform -translate-y-[55%] w-12 h-12">
        <Image
          src="/images/head_transparent.png"
          alt="list"
          height={50}
          width={50}
        />
      </div>
      {children}
    </div>
  );
};

export default ListItem;
