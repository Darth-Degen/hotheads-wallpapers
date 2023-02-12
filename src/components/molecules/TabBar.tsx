import { FC, useState } from "react";
import { TabBarItem } from "@components";

interface TabBarProps {
  tabs: string[];
}
const TabBar: FC<TabBarProps> = (props: TabBarProps) => {
  const { tabs } = props;
  const [tab, setTab] = useState<number>(0);
  return (
    <div className=" bg-custom-light-gray rounded-3xl flex gap-1 items-center p-1.5 w-min">
      {tabs.map((item, index) => (
        <TabBarItem
          key={index}
          id={index}
          isSelected={tab === index}
          handleClick={setTab}
        >
          {item}
        </TabBarItem>
      ))}
    </div>
  );
};

export default TabBar;
