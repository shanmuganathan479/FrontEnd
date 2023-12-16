import "./App.css";
import BriyaniView from "./components/feature/briyani/BriyaniView";
import Chicken65View from "./components/feature/chicken65/Chicken65View";

import { Provider } from "react-redux";
import store from "./components/app/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Toolkit</h1>
        <BriyaniView />
        <Chicken65View />
      </div>
    </Provider>
  );
}

export default App;
