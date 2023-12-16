import "./App.css";
import Intro from "./components/april6/Intro";
import Action from "./components/april7/action/Action";
import { CakeIce } from "./components/april7/cakeIce/CakeIce";
import { CombReducer } from "./components/april7/combineReducer/CombReducer";
import GettingStarted from "./components/april7/gettingStarted/GettingStarted";
import MultipleReducer from "./components/april7/multiReducer/MultipleReducer";
import Reducer from "./components/april7/reducer/Reducer";
import Store from "./components/april7/store/Store";
import ThreeConcepts from "./components/april7/ThreeConcepts/ThreeConcepts";
import ThreePrinciples from "./components/april7/ThreePrinciples/ThreePrinciples";
import AsyncAction from "./components/april8/asyncActions/AsyncAction";
import MiddleWare from "./components/april8/middleWare/MiddleWare";
import ReduxThunkMiddleWare from "./components/april8/reduxThunkMIddleware/ReduxThunkMiddleWare";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import CakeContainer from "./components/april8/react-redux/CakeContainer";
import ReduxWithHook from "./components/april9/reactReduxHook/ReduxWithHook";
import HooksCakeContainer from "./components/april9/useSelectorWithuseDispatch/HooksCakeContainer";
import IcecreamContainer from "./components/april10/icecream/IcecreamContainer";
import { LoggerMiddlwareReactRedux } from "./components/april10/logger/LoggerMiddlwareReactRedux";
import NewCakeContainer from "./components/april10/actionPayload/NewCakeContainer";
import ItemContainer from "./components/april11/mapStateToProps/ItemContainer";
import UserContainer from "./components/april11/asyncActions/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>REDUX (For js)</h1>
        <Intro />
        <GettingStarted />
        <ThreeConcepts />
        <ThreePrinciples />
        <Action />
        <Reducer />
        <Store />
        <CakeIce />
        <MultipleReducer />
        <CombReducer />
        <MiddleWare />
        <AsyncAction />
        <ReduxThunkMiddleWare />
        <CakeContainer/> 
        <ReduxWithHook/>
        <HooksCakeContainer/>
        <IcecreamContainer/>
        <LoggerMiddlwareReactRedux/>
        <NewCakeContainer/>

        <ItemContainer cake />
        <ItemContainer/>

        <UserContainer/>

      </div>
    </Provider>
  );
}

export default App;
