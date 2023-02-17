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

  const Item = () => (
    <div
      className={` transition-all duration-300 py-5 ${
        disabled
          ? "opacity-20 cursor-default"
          : isCurrent
          ? "text-custom-yellow cursor-default"
          : "text-gray-300 hover:text-custom-yellow cursor-pointer"
      }`}
    >
      {children}
      <motion.div
        className={`h-0.5 bg-custom-green`}
        initial={{ width: 0 }}
        animate={{ width: isCurrent ? "100%" : 0 }}
        transition={{ duration: 0.69 }}
      />
    </div>
  );
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
          <Item />
        </Link>
      )}
    </>
  );
};

export default NavItem;
