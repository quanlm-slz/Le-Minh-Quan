import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  from: string,
  to: string,
  amount: number
}

const ExchangeForm: React.FC = () => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="from">From</label>
        <input defaultValue="USD" {...register("from")} />
      </div>
    </form>
  )
}

export default ExchangeForm;
