import './App.css';
import FetchData from './components/march10/dataFetching/FetchData';
import FetchData2 from './components/march10/dataFetching/FetchData2';
import InCorrectDependecy from './components/march10/useEffect2/InCorrectDependecy';
import MouseContainer from './components/march10/useEffect2/MouseContainer';
import { UseEffectOnlyOnce } from './components/march10/useEffect2/UseEffectOnlyOnce';
import ContextA from './components/march13/beforeUseContext/ContextA';
import UseContextIntro from './components/march13/useContext/UseContextIntro';
import HooksIntro from './components/march7/intro/HooksIntro';
import ClassCounter from './components/march8/useStateHook/ClassCounter';
import CounterStateHook from './components/march8/useStateHook/CounterStateHook';
import { ProperCounter } from './components/march8/withPreviousState/ProperCounter';
import UseStateArray from './components/march9/StateArray/UseStateArray';
import UseStateObject from './components/march9/StateObject/UseStateObject';
import { EffectHookINtro } from './components/march9/useEffect/EffectHookINtro';
import { TitleCounter } from './components/march9/useEffect/TitleCounter';

import { UserProvider } from './components/march13/beforeUseContext/NormalContext';
import { UserProvider2 } from './components/march13/beforeUseContext/NormalContext';
import UseReducer from './components/march13/useReducer/UseReducer';
import SimpleExample from './components/march13/useReducer/SimpleExample';
import ComplexExample from './components/march14/useReducer/ComplexExample';
import MultipleReducer from './components/march14/useReducer/MultipleReducer';
import App2 from './components/march15/UseReducerWithUseContext/App2';
import WithUseState from './components/march15/UseReducerDataFetch/part1/WithUseState';
import WithUseReducer from './components/march15/UseReducerDataFetch/part2/WithUseReducer';
import Title from './components/march15/UseCallback/Title';

import UseMemo from './components/march16/useMemo/UseMemo';
import UseRef from './components/march16/useRef/UseRef';
import UseRef2 from './components/march16/useRef/UseRef2';
import DocTitle from './components/march17/customHooks/ex1/DocTitle';
import DocTitle2 from './components/march17/customHooks/ex1/DocTitle2';
import CounterEx from './components/march17/customHooks/ex2/CounterEx';
import CounterEX2 from './components/march17/customHooks/ex2/CounterEX2';
import InputHook from './components/march17/customHooks/ex3/InputHook';
function App() {
  return (
    <div className="App">
     <h1>REACT HOOKS</h1>

     <HooksIntro/>
     <ClassCounter/>
     <CounterStateHook/>
     <ProperCounter/>
     <UseStateObject/>
     <UseStateArray/>
     <EffectHookINtro/>
     <TitleCounter/>
     {/* <UseEffectOnlyOnce/> */}
     <MouseContainer/>
     <InCorrectDependecy/>
     <FetchData/>
     <FetchData2/>
    <UseContextIntro/>
    
    <UserProvider value="shan">
      <UserProvider2 value="stark">
       <ContextA/>    
      </UserProvider2>
    </UserProvider>
   
   <UseReducer/>
   <SimpleExample/>
   <ComplexExample/>
   <MultipleReducer/>
   <App2/>
   <WithUseState/>
   <WithUseReducer/>
   <Title/>

   <UseMemo/>

   <UseRef/>
   <UseRef2/>
   <DocTitle/>
   <DocTitle2/>
   
   <CounterEx/>
   <CounterEX2/>
   <InputHook/>
    </div>
  );
}

export default App;
