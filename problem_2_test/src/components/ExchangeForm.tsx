import { useMemo } from "react";
import { AutoCompleteInterface } from "../utils/AutoComplete";
import { currencies } from "../utils/Currency";
import AutoComplete from "./AutoComplete";
const ExchangeForm: React.FC = () => {
  const currenciesOptions: AutoCompleteInterface[] = useMemo(
    () =>
      currencies.map((currency) => ({ ...currency, label: currency.currency })),
    [],
  );
  return (
    <div className="flex gap-5">
      <div className="flex-grow">
        <label className="flex">Amount</label>
        <div>
          <input
            className="input-style"
            type="number"
            step={0.01}
            min={0}
            placeholder="Amount"
          />
        </div>
      </div>
      <AutoComplete options={currenciesOptions} label="From" />
      <AutoComplete options={currenciesOptions} label="To" />
    </div>
  );
};

export default ExchangeForm;
