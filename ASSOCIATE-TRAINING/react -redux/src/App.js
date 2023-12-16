import "./App.css";
import BiscuitPrice from "./components/jun18/BiscuitPrice";
import BiscuitWithHooks from "./components/jun18/Hooks/BiscuitWithHooks";
import BriyanPrice from "./components/jun18/Hooks/BriyanPrice";
import Introduction from "./components/jun18/Introduction";
import store from "./components/redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Introduction />
        <BiscuitPrice />
        <BiscuitWithHooks/>
        <BriyanPrice/>
      </div>
    </Provider>
  );
}

export default App;
