import { AnimatePresence, motion } from "framer-motion";
import { SetStateAction, Dispatch, FC, ReactNode, useEffect } from "react";
import { scaleExitAnimation } from "@constants";
import { CloseIcon } from "@components";

interface Props {
  show: boolean;
  close: Dispatch<SetStateAction<string>>;
  children: ReactNode;
  contentLoaded?: boolean;
}
const Modal: FC<Props> = (props: Props) => {
  const { show, close, children, contentLoaded = true } = props;

  //stop page scroll (when modal or menu open)
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [show]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="image-modal"
          className="fixed inset-0 backdrop-blur z-50  bg-custom-black bg-opacity-80 cursor-pointer"
          onClick={() => close("")}
          {...scaleExitAnimation}
        >
          <div
            className={`h-screen w-screen lg:h-[75vh] lg:w-[75vh] bg-opacity-80 md:bg-opacity-90  flex items-center
              md:rounded-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-default`}
            // onClick={(e) => e.stopPropagation()}
          >
            <div className=" flex flex-col justify-center items-center gap-4">
              {/* <motion.div
                className="cursor-pointer rounded-full transition-all duration-100 bg-white p-0.5 hover:outline hover:outline-white z-10"
                onClick={() => close("")}
                whileTap={{ scale: 0.96 }}
              >
                <CloseIcon color="#121212" />
              </motion.div> */}
              <div className="h-3/4">{children}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
