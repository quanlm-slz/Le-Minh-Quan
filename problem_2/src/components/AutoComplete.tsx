import { useAutocomplete } from "@mui/base/useAutocomplete";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { AutoCompleteInterface } from "../utils/AutoComplete";

export type AutoComplteHandle = {
  value: () => Record<any, any> | null;
};

const AutoComplete: ForwardRefRenderFunction<
  AutoComplteHandle,
  {
    options: AutoCompleteInterface[];
    label: string;
  }
> = ({ options, label }, ref) => {
  const [value, setValue] = useState<AutoCompleteInterface | null>(null);
  useImperativeHandle(ref, () => ({
    value: () => value,
  }));

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    options,
    getOptionLabel: (option) => option.label,
    value,
    onChange: (_, newValue) => setValue(newValue),
  });

  return (
    <div className="flex-grow">
      <label {...getInputLabelProps()} className="flex">
        {label}
      </label>
      <div {...getRootProps()} className="relative">
        {value && (
          <img
            className="absolute top-0 left-0"
            src={`/assets/${value.label}.svg`}
          />
        )}
        <input {...getInputProps()} className="input-style pl-11" />
      </div>
      {groupedOptions.length > 0 && (
        <ul
          {...getListboxProps()}
          className="max-h-32 overflow-y-scroll overflow-x-clip shadow"
        >
          {(groupedOptions as AutoCompleteInterface[]).map((option, index) => (
            <li
              className="bg-white hover:bg-blue-300 aria-selected:bg-blue-500 flex gap-5"
              {...getOptionProps({ option, index })}
              key={index}
            >
              <img src={`/assets/${option.label}.svg`} />
              <div>{option.label}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default forwardRef(AutoComplete);
