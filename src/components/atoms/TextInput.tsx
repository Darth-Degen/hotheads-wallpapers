import { FC, useState } from "react";

interface Props {
  handleInput: (value: string) => void;
}

const NumberInput: FC<Props> = (props: Props) => {
  const { handleInput } = props;

  const [value, setValue] = useState<string>();

  const charLim: number = 30;
  const styles: string = "w-56 h-10 bg-dark text-sm";

  //add max length check
  const onInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const val = (event.target as HTMLInputElement).value;
    setValue(val);
    handleInput(val);
  };

  return (
    <input
      className={`relative flex justify-between ${styles} transition-all duration-200 border border-dark hover:border-orange-300 focus:border-red-400 active:outline-none focus:outline-none rounded items-center p-2 ${
        value && value.length >= charLim ? "text-red-500" : ""
      }`}
      onInput={(e) => onInput(e)}
      placeholder="Add Text"
      type="text"
      maxLength={charLim}
    />
  );
};

export default NumberInput;
