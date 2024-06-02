## Unecessary extends, just use BoxProps directly (lines 11 - 13)
- remove:
```
interfaceProps extends BoxProps {}
```

## Spread `props` directly, avoid unessary const declaration (lines 14 - 15)
- change:
```
const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
```
->
```
const WalletPage: React.FC<Props> = ({ children, ...rest }) => {
```

## Use `useCallback` hooks for getPriority to avoid recreate everytime the component is loaded (lines 15 - 30)
## Use correct type of `blockchain` (probably string) instead of using any to get typescript error when wrong type is used

const getPriority = useCallback((blockchain: any): number => {...},[])

## Recheck as const `balancePriority` is unused and `lhsPriority` has not been declared yet (lines 38 - 39)

## Unecessary nested if statemnt (lines 39 - 44)
- change:
```
if (lhsPriority > -99) {
    if (balance.amount <= 0) {
        return true
    }
}
```
->
```
return lhsPriority > -99 && balance.amount <= 0
```

## Just return result of rightPriority - leftPriority instead of using if as sort function only discriminate positive and negative
- change:
```
if (leftPriority > rightPriority) {
	return -1;
} else if (rightPriority > leftPriority) {
	return 1;
}
```
->
```
return rightPriority - leftPriority
```

## `formattedBalances` should be used instead of `sortedBalances` (lines 63)
- formattedBalances have type FormattedWalletBalnce[], sortedBalances have type WalletBalance[]
- chnage:
```
sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
```
->
```
formattedBalances.map((balance: FormattedWalletBalance, index: number) => {
```

## `usdValue` should be calculate in formattedBalances, rename `formatted` key of FormattedWalletBalance to `formattedAmount` to match input of WalletRow

## Wrap `formattedBalances` calculation in useMemo hook to avoid rerender
