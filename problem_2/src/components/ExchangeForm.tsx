import { useCallback, useMemo, useRef, useState } from "react";
import { AutoCompleteInterface } from "../utils/AutoComplete";
import { Currency, currencies } from "../utils/Currency";
import AutoComplete, { AutoComplteHandle } from "./AutoComplete";
import AmountInput, { AmountInputHandle } from "./AmountInput";

const ExchangeForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const from = useRef<AutoComplteHandle>(null);
  const to = useRef<AutoComplteHandle>(null);
  const amount = useRef<AmountInputHandle>(null);

  const currenciesOptions: AutoCompleteInterface[] = useMemo(
    () =>
      currencies.map((currency) => ({ ...currency, label: currency.currency })),
    [],
  );

  const handleClick = useCallback(() => {
    const fromCurrency = from.current!.value() as Currency;
    const toCurrency = to.current!.value() as Currency;
    const currencyAmount = amount.current!.value() || 0;
    const result = (currencyAmount / fromCurrency.price) * toCurrency.price;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage(
        `${currencyAmount} ${fromCurrency.currency} = ${result} ${toCurrency.currency}`,
      );
    }, 2000);
  }, [setLoading, from, to]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-5 h-16 z-10">
        <AmountInput ref={amount} />
        <AutoComplete options={currenciesOptions} label="From" ref={from} />
        <AutoComplete options={currenciesOptions} label="To" ref={to} />
      </div>
      <div>{loading ? "loading..." : message}</div>
      <div className="flex h-auto justify-center z-0">
        <button
          onClick={handleClick}
          className="py-1 px-4 bg-slate-400 rounded hover:cursor hover:bg-slate-500 disabled:text-slate-500 disabled:bg-slate-200"
          disabled={loading}
        >
          Exchange
        </button>
      </div>
    </div>
  );
};

export default ExchangeForm;
