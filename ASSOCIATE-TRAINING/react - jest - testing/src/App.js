import { Provider } from "react-redux";
import "./App.css";
import Simplecounter from "./components/jun23/Counter";
import DelayCounter from "./components/jun25/DelayCounter";
import ReduxCounter from "./components/jun25/redux/ReduxCounter";
import store from "./components/jun25/redux/store";

function App() {
  return (
    <div className="App">
      <h1>React Jest Testing</h1>
      <Simplecounter />
      <DelayCounter />

      <Provider store={store}>
        <ReduxCounter />
      </Provider>
    </div>
  );
}

export default App;
