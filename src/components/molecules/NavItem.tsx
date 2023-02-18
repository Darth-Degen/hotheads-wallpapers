import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
  href: string;
  disabled?: boolean;
}
const NavItem: FC<Props> = (props: Props) => {
  const { children, href, disabled = false } = props;

  const router = useRouter();
  const isCurrent = router.pathname === href;

  const DisabledItem = () => (
    <div
      className={` transition-all duration-300 py-5 opacity-20 cursor-default `}
    >
      {children}
    </div>
  );

  return (
    <>
      {disabled ? (
        <DisabledItem />
      ) : (
        <Link href={href}>
          <Item isCurrent={isCurrent}>{children}</Item>
        </Link>
      )}
    </>
  );
};

interface ItemProps {
  children: ReactNode;
  isCurrent: boolean;
}
const Item: FC<ItemProps> = (props: ItemProps) => {
  const { children, isCurrent } = props;
  return (
    <div
      className={` transition-all duration-300 py-5 ${
        isCurrent
          ? "text-custom-yellow cursor-default"
          : "text-gray-300 hover:text-custom-yellow cursor-pointer"
      }`}
    >
      {children}
      <Underline animate={isCurrent} />
    </div>
  );
};

interface UnderlineProps {
  animate: boolean;
}
const Underline: FC<UnderlineProps> = (props: UnderlineProps) => {
  const { animate } = props;
  return (
    <motion.div
      className={`h-0.5 bg-custom-green`}
      initial={{ width: 0 }}
      animate={{ width: animate ? "100%" : 0 }}
      transition={{ duration: 0.69 }}
    />
  );
};

export default NavItem;
