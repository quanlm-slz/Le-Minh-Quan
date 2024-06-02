interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
}
interface FormattedWalletBalance {
  currency: string;
  amount: number;
  usdValue: number;
  formattedAmount: string;
}

const WalletPage: React.FC<BoxProps> = ({ children, ...rest }) => {
  const balances = useWalletBalances();
  const prices = usePrices();

  const getPriority = useCallback((blockchain: string): number => {
    switch (blockchain) {
      case 'Osmosis':
        return 100
      case 'Ethereum':
        return 50
      case 'Arbitrum':
        return 30
      case 'Zilliqa':
        return 20
      case 'Neo':
        return 20
      default:
        return -99
    }
  }, [])

  const formattedBalances: FormattedWalletBalance[] = useMemo(() => {
    return balances
      .filter(({ balance, amount }) => getPriority(balance) > -99 && amount <= 0)
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        const leftPriority = getPriority(lhs.blockchain);
        const rightPriority = getPriority(rhs.blockchain);
        return rightPriority - leftPriority
      })
      .map((balance: WalletBalance) => {
        return {
          ...balance,
          usdValue: prices[balance.currency] * balance.amount,
          formatted: balance.amount.toFixed()
        }
      })
  }, [balances, prices]);

  return (
    <div {...rest}>
      {
        formattedBalances.map((balance, index) => (
          <WalletRow key={index} className={classes.row} {...balance} />
        ))
      }
    </div>
  )
}
