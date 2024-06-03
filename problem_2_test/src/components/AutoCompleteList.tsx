import {
  Dispatch,
  Ref,
  SetStateAction,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { AutoCompleteInterface } from "../utils/AutoComplete";

export type AutoCompleteListRef = {
  handleSetOption: (options: AutoCompleteInterface[]) => void;
};

const AutoCompleteList: React.ForwardRefRenderFunction<
  AutoCompleteListRef,
  {
    options: AutoCompleteInterface[];
    setValue: Dispatch<SetStateAction<string>>;
    setFocus: Dispatch<SetStateAction<boolean>>;
  }
> = ({ setValue, setFocus }, ref: Ref<AutoCompleteListRef>) => {
  const [options, setOptions] = useState<AutoCompleteInterface[]>([]);
  useImperativeHandle(ref, () => {
    return {
      handleSetOption: (options: AutoCompleteInterface[]) =>
        setOptions(options),
    };
  });
  return (
    <ul
      className="flex flex-col max-h-32 overflow-scroll"
      onBlur={() => setFocus(false)}
    >
      {options.map((option, index) => (
        <li
          className="hover:bg-blue-300"
          key={index}
          onClick={() => {
            setValue(option.label);
            setFocus(false);
          }}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
};

export default forwardRef(AutoCompleteList);
