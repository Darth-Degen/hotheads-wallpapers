import { FC, SVGProps, useState } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  fillHover?: string;
  color?: string;
  hoverColor?: string;
}

const MenuIcon: FC<Props> = (props: Props) => {
  const { hoverColor = "white", className, color = "#9ca3af" } = props;

  const [didHover, setDidHover] = useState<boolean>(false);

  return (
    <div
      className="cursor-pointer rounded h-min p-2"
      onMouseEnter={() => setDidHover(true)}
      onMouseLeave={() => setDidHover(false)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className ? className : ""} cursor-pointer`}
      >
        <path
          d="M11.333 16.9997L16.9997 22.6663M16.9997 22.6663L22.6663 16.9997M16.9997 22.6663V11.333M31.1663 16.9997C31.1663 24.8237 24.8237 31.1663 16.9997 31.1663C9.17564 31.1663 2.83301 24.8237 2.83301 16.9997C2.83301 9.17564 9.17564 2.83301 16.9997 2.83301C24.8237 2.83301 31.1663 9.17564 31.1663 16.9997Z"
          stroke=""
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={` transition-all duration-300 ${
            didHover ? "stroke-[#56BC78]" : "stroke-gray-200 "
          }`}
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
