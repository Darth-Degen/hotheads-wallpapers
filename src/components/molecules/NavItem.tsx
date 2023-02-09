import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
  href: string;
}
const NavItem: FC<Props> = (props: Props) => {
  const { children, href } = props;

  const router = useRouter();
  const isCurrent = router.pathname === href;

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer hover:text-custom-yellow transition-all duration-300 py-5 ${
          isCurrent ? "text-custom-yellow" : "text-gray-300"
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
    </Link>
  );
};

export default NavItem;
