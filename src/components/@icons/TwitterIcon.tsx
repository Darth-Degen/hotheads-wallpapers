import { FC, SVGProps } from "react";
import Image from "next/image";
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}

const TwitterIcon: FC<Props> = (props: Props) => {
  const { color = "white", size = 30 } = props;
  return (
    <a href="https://twitter.com/HotHeadsSOL" rel="noreferrer" target="_blank">
      <Image
        src="/images/twitter.png"
        width={size}
        height={size}
        alt="discord"
      />
    </a>
  );
};

export default TwitterIcon;
