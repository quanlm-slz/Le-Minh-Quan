import { ElementRef, useRef, useState } from "react";
import { AutoCompleteInterface } from "../utils/AutoComplete";
import AutoCompleteList from "./AutoCompleteList";

const AutoComplete: React.FC<{
  label: string;
  options: AutoCompleteInterface[];
}> = ({ options, label }) => {
  const [value, setValue] = useState<string>("");
  const [focus, setFocus] = useState<boolean>(false);
  const optionList = useRef<ElementRef<typeof AutoCompleteList>>(null);
  return (
    <div className="flex flex-grow flex-col">
      <label className="flex">{label}</label>
      <input
        type="text"
        value={value}
        className="input-style"
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
      />
      {focus && (
        <AutoCompleteList
          ref={optionList}
          options={options}
          setValue={setValue}
          setFocus={setFocus}
        />
      )}
    </div>
  );
};

export default AutoComplete;
