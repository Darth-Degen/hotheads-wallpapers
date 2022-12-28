import { FC } from "react";
import debounce from "lodash.debounce";

interface Props {
  supply: number;
  handleInput: (number: number) => void;
}

const NumberInput: FC<Props> = (props: Props) => {
  const { supply, handleInput } = props;
  const debouncer = debounce((value) => handleInput(value), 1000);

  const styles: string = "w-56 h-10 bg-dark text-sm";

  //prevent keys
  const onKeyPress = (event: React.KeyboardEvent): void => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  //add max length check
  const onInput = (event: React.FormEvent<HTMLInputElement>): void => {
    if (Number((event.target as HTMLInputElement).value) > supply) {
      (event.target as HTMLInputElement).value = supply.toString();
    } else {
      debouncer(Number((event.target as HTMLInputElement).value));
    }
  };
  //   <button className="m-4 p-1 rounded-full bg-gradient-to-t from-red-600 via-orange-600 to-yellow-500 hover:bg-dark">
  //   <span className="block text-gray-300 px-4 py-2 font-semibold rounded-full bg-dark hover:bg-gradient-to-t hover:from-red-600 hover:via-orange-600 hover:to-yellow-500  transition-all duration-500">
  //     Follow Me
  //   </span>
  // </button>
  return (
    <div>
      <input
        className={`relative flex justify-between ${styles} transition-all duration-200 border border-dark hover:border-orange-300 focus:border-red-400 active:outline-none focus:outline-none rounded items-center p-2 `}
        onKeyPress={(e) => onKeyPress(e)}
        onInput={(e) => onInput(e)}
        placeholder="Enter ID"
        type="number"
        min={1}
        max={supply}
      />
    </div>
  );
};

export default NumberInput;
