import './App.css';
import GettingStarted from './components/april12/gettingStarted/GettingStarted';
import ReduxToolkit from './components/april12/intro/ReduxToolkit';
import ThreeConcepts from './components/april12/threeCoreConcepts/ThreeConcepts';
import ThreePrinciples from './components/april12/threePrinciples/ThreePrinciples';
import BindActionCreator from './components/april14/bindActionCreator/BindActionCreator';
import CombineReducer from './components/april14/combineReducer/CombineReducer';
import ConfiguringStore from './components/april14/configuringStore/ConfiguringStore';
import MultiReducer from './components/april14/multipleReducers/MultiReducer';
import RestockCake from './components/april14/restock/RestockCake';
import AsyncAction from './components/april15/asyncAction/AsyncAction';
import Immer from './components/april15/immer/Immer';
import MiddleWare from './components/april15/middleWare/MiddleWare';
import ThunkMiddleware from './components/april15/thunkMiddleware/ThunkMiddleware';
import IntroToolkit from './components/reduxToolkit/april15/intro/IntroToolkit';
import Setup from './components/reduxToolkit/april15/setup/Setup';
import CakeSlice from './components/reduxToolkit/april16/cakeSlice/CakeSlice';
import ConfigStore from './components/reduxToolkit/april16/configureStore/ConfigStore';
import ExtraReducer from './components/reduxToolkit/april16/extraReducer/ExtraReducer';
import IceSlice from './components/reduxToolkit/april16/iceSlice/IceSlice';
import LoggerMW from './components/reduxToolkit/april16/loggerMW/LoggerMW';
import AsyncThunk from './components/reduxToolkit/may3/AsyncThunk';

function App() {
  return (
    <div className="App">
     <h1>REDUX</h1>

     <ReduxToolkit/>
     <GettingStarted/>
     <ThreeConcepts/>
     <ThreePrinciples/>
     <ConfiguringStore/>
     <RestockCake/>
     <BindActionCreator/>
     <MultiReducer/>
     <CombineReducer/>
     <Immer/>
     <MiddleWare/>
     <AsyncAction/>
     <ThunkMiddleware/>

     <IntroToolkit/>
     <Setup/>
     <CakeSlice/>
     <ConfigStore/>
     <IceSlice/>
     <LoggerMW/>
     <ExtraReducer/>
     <AsyncThunk/>
    </div>
  );
}

export default App;
