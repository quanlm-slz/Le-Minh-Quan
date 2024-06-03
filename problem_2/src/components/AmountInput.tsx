import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

export type AmountInputHandle = {
  value: () => number;
};

const AmountInput: ForwardRefRenderFunction<AmountInputHandle, {}> = (
  {},
  ref,
) => {
  const [amount, setAmount] = useState<number>(0);
  useImperativeHandle(ref, () => ({
    value: () => amount,
  }));
  return (
    <div className="flex-grow">
      <label className="flex">Amount</label>
      <div>
        <input
          className="input-style"
          type="number"
          step={0.01}
          min={0}
          value={amount}
          onChange={(e) => {
            const amount = Number(e.target.value);
            setAmount(Number(amount.toFixed(2)));
          }}
          placeholder="Amount"
        />
      </div>
    </div>
  );
};

export default forwardRef(AmountInput);
