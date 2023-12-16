import './App.css';
import Parent from './components/april2/ParentChild/Parent';
import ArrayUseState from './components/april2/StateImmutablity/ArrayUseState';
import { ObjectUseState } from './components/april2/StateImmutablity/ObjectUseState';
import StateImmutablity from './components/april2/StateImmutablity/StateImmutablity';
import Parent2 from './components/april3/memo/Parent2';
// import { Child1 } from './components/april3/optimization/Child1';
import { GrandParent } from './components/april3/optimization/GrandParent';
// import { Parent1 } from './components/april3/optimization/Parent1';
import { InCorrectMemo } from './components/april4/IncorrectMemo/InCorrectMemo';
import PropReference from './components/april4/IncorrectPropRef/PropReference';
import ImpureComponent from './components/april4/IncorrectWithImpureComponent/ImpureComponent';
import UsememoCallback from './components/april4/Memo&Callback/UsememoCallback';
import { ChildA } from './components/april5/Context/ContextChildren';
import ContextMemo from './components/april5/Context/ContextMemo';
import ContextParent from './components/april5/Context/ContextParent';
import ContextSameE from './components/april5/ContextAndSameEleRef/ContextSameE';
import Intro from './components/march20/Intro/Intro';
import Rerender from './components/march20/Rerender/Rerender';
import UseState from './components/march20/UseState/UseState';
import UseReducer from './components/march21/UseReducer/UseReducer';

function App() {
  return (
    <div className="App">
       <h1>React Render</h1>

       <Intro/>
       <Rerender/>
       <UseState/>
       <UseReducer/>
       <StateImmutablity/>
       <ObjectUseState/>
       <ArrayUseState/>
       <Parent/>

       <GrandParent/>
       <Parent2/>

       <InCorrectMemo/>
       <ImpureComponent/>
       <PropReference/>
       <UsememoCallback/>

       <ContextParent/>
       <ContextMemo/>

       <ContextSameE/>
       <ContextParent>
        <ChildA/>
       </ContextParent>
      



    </div>
  );
}

export default App;
