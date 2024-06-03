import "./App.css";
import ExchangeForm from "./components/ExchangeForm";

function App() {
  return (
    <div className="flex flex-col gap-10 w-3/4 mx-auto">
      <h1 className="text-3xl font-bold underline">Token exchange</h1>
      <ExchangeForm />
    </div>
  );
}

export default App;
