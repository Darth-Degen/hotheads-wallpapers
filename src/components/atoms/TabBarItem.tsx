import { Dispatch, FC, ReactNode, SetStateAction } from "react";

interface TabProps {
  id: number;
  children: ReactNode;
  isSelected: boolean;
  handleClick: Dispatch<SetStateAction<number>>;
}

const TabBarItem: FC<TabProps> = (props: TabProps) => {
  const { id, children, isSelected, handleClick } = props;
  return (
    <div
      className={`w-20 text-center rounded-3xl p-2 cursor-pointer transition-all duration-300 uppercase ${
        isSelected ? "bg-custom-dark-gray " : "bg-custom-light-gray"
      }`}
      onClick={() => handleClick(id)}
    >
      {children}
    </div>
  );
};
export default TabBarItem;
