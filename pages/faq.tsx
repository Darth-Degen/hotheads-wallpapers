import { PageLayout, ScrollItem, ArrowIcon } from "@components";
import { FC, useState } from "react";
import { NextPage } from "next";
import { motion, AnimatePresence } from "framer-motion";

const Home: NextPage = () => {
  return (
    <PageLayout header="FAQ">
      <div className="container overflow-y-hidden lg:overflow-y-auto overflow-x-hidden h-full w-full flex flex-col items-center px-0 md:px-5 py-5 md:py-10">
        {data.map((item, index) => (
          <ScrollItem key={index}>
            <FAQ question={item.question} answer={item.answer} />
          </ScrollItem>
        ))}
      </div>
    </PageLayout>
  );
};

const ParentVariants = {
  closed: {
    height: "8rem",
    transition: {
      duration: "1",
    },
  },
  open: {
    height: "14rem",
    transition: {
      when: "beforeChildren", // <<-- does not work
      duration: "1", /// <<-- works
      // delayChildren: "1" // <<-- does not work
    },
  },
};

const ChildVariants = {
  closed: {
    // opacity: "0",
  },
  open: {
    // opacity: "1",
    // transition: {
    //   delay: "1",
    //   duration: "1",
    // },
  },
  exit: {
    // opacity: "0",
  },
};

interface FAQProps {
  question: string;
  answer: string;
}
const FAQ: FC<FAQProps> = (props: FAQProps) => {
  const { question, answer } = props;

  const [open, toggleOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center text-center lg:px-10"
      variants={ParentVariants}
      initial="closed"
      animate={open ? "open" : "closed"}
      key="parent"
      onClick={() => {
        toggleOpen(!open);
      }}
    >
      <div className="text-xs lg:text-sm pb-6">{question}</div>
      <button
        className=" p-3"
        onClick={() => {
          toggleOpen(!open);
        }}
      >
        <ArrowIcon animate={open} />
      </button>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            className="text-custom-light-red text-xs lg:text-sm"
            key="child"
            variants={ChildVariants}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQ {
  question: string;
  answer: string;
}
const data: FAQ[] = [
  {
    question: "How many Hot heads will there be in the collection?",
    answer: "How many Hot heads will there be in the collection?",
  },
  {
    question: "How many Hot heads will",
    answer:
      "How many Hot heads will there be in the collection? How many Hot heads will there be in the collection?",
  },
  {
    question:
      "How many Hot headHow many Hot heads will there be in the collection?",
    answer:
      "How many Hot heads willHow many Hot heads will there be in the collection?  How many Hot heads will there be in the collection?",
  },
  {
    question: "How many Hot heads will there be in the collection?",
    answer: "How many Hot heads will there be in the collection?",
  },
  {
    question: "How many Hot heads will there be in the collection?",
    answer: "How many Hot heads will there be in the collection?",
  },
  {
    question: "How many Hot heads will there be in the collection?",
    answer: "How many Hot heads will there be in the collection?",
  },
  {
    question: "How many Hot heads will there be in the collection?",
    answer: "How many Hot heads will there be in the collection?",
  },
  {
    question: "How many Hot heads will there be in the collection?",
    answer: "How many Hot heads will there be in the collection?",
  },
  {
    question: "How many Hot heads will there be in the collection?",
    answer: "How many Hot heads will there be in the collection?",
  },
  {
    question: "How many Hot heads will there be in the collection?",
    answer: "How many Hot heads will there be in the collection?",
  },
  {
    question: "How many Hot heads will there be in the collection?",
    answer: "How many Hot heads will there be in the collection?",
  },
  {
    question: "How many Hot heads will there be in the collection?",
    answer: "How many Hot heads will there be in the collection?",
  },
];

export default Home;
