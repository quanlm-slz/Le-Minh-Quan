import './App.css'
import UseAutocomplete from './components/AutoComplete'
import ExchangeForm from './components/ExchangeForm'

function App() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold underline">
        Token exchange
      </h1 >
      <UseAutocomplete />
    </div >
  )
}

export default App
