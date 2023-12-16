import './App.css';
import FuncComp from './components/feb 17/funcComp/FuncComp';
import Func2 from './components/feb 17/funcComp/ArrowFunc';
// We can use anyname coz this is default export

import { NamedExp } from './components/feb 17/funcComp/NamedExp';
// we can use this name only

import ClassComp from './components/feb 20/ClassComp';
// class component

import WithoutJSX from './components/feb 20/WithoutJSX';
import Props from './components/feb 20/Props';
import PropsWithClassComp from './components/feb 20/PropsWithClassComp';

import State from './components/feb 20/State';
import SetState from './components/feb 20/SetState';

import DestructringFuncC from './components/feb 20/DestructringFuncC';
import DestructringClassC from './components/feb 20/DestructringClassC';

import EventHandlingFun from './components/feb 21/eventHandling.js/EventHandlingFun';
import EventHandlingCLass from './components/feb 21/eventHandling.js/EventHandlingCLass';
import EventBinding from './components/feb 21/eventBinding/EventBinding';

import Parent from './components/feb 21/methodAsProps/Parent';
import Method1 from './components/feb 21/conditionalRendering/Method1';
import Method2 from './components/feb 21/conditionalRendering/Method2';
import Method3 from './components/feb 21/conditionalRendering/Method3';
import Method4 from './components/feb 21/conditionalRendering/Method4';

import CondRend from './components/feb 21/conditionalRendering/CondRend';
import LisrRend from './components/feb 21/ListRendering/LisrRend';

import ObjectEx from './components/feb 21/ListRendering/ObjectEx';
import ParentObject from './components/feb 21/ListRendering/ParentObject';

import Cssstyling from './components/feb 21/css/Cssstyling';

import Form from './components/feb 22/formHandling/Form';

import LifeCycle from './components/feb 22/LifeCycle/LifeCycle';
import Mounting1 from './components/feb 22/mounting/Mounting1';
import Upadting1 from './components/feb 22/updating/Upadting1';

import FragmentDemo from './components/feb 22/fragment/FragmentDemo';
import Table from './components/feb 22/fragment/Table';

import ParentComp from './components/feb 23/pureComp/ParentComp';

import ParentMemo from './components/feb 23/memo/ParentMemo';

import RefDemo from './components/feb 23/refs/RefDemo';
import ParentRef from './components/feb 23/refsWithClassC/ParentRef';

import FRParent from './components/feb 23/forwardingRefs/FRParent';

import PortalDemo from './components/feb 27/portal/PortalDemo';

import Sample from './components/feb 27/error Bound/Sample';

import ErrorBoundary from './components/feb 27/error Bound/ErrorBoundary';

import Counter from './components/march 2/higher Order Component/Counter';
import Hover from './components/march 2/higher Order Component/Hover';

import RenderProps from './components/march 2/render Props/RenderProps';
import RendP from './components/march 2/render Props/RendP';

import Counter2 from './components/march 2/render Props/Counter2';

import Hover2 from './components/march 2/render Props/Hover2';

import ContextA from './components/march 3/context/ContextA';
import { UserProvider } from './components/march 3/context/UserContext';

import GetReq from './components/march 6/HTTP Request/GET request/GetReq';
import PostReq from './components/march 6/HTTP Request/POST request/PostReq';
function App() {
  return (
    <div className="App">
      <h1>React js</h1>
      <FuncComp/>
      <Func2/>
      <NamedExp/>
     <ClassComp/>
     <WithoutJSX/>
     <Props mobile="sony"> <button>This is children</button></Props>
     <Props  mobile="iphone"/>
     <Props  mobile="samsung"/>

     <PropsWithClassComp lap= "mac"/>
     <PropsWithClassComp lap= "dell"/>
     <PropsWithClassComp lap= "hp"/>
     
     <State/>
     <SetState/>
     <DestructringFuncC name="shan" age="22"/>

     <DestructringClassC name="stark" age="22"/>
     
     <EventHandlingFun/>
     <EventHandlingCLass/>

     <EventBinding/>

     <Parent/>
     <CondRend/>
     <Method1/>
     <Method2/>
     <Method3/>
     <Method4/>

     <LisrRend/>
     <ObjectEx/>
    <ParentObject/>

    <Cssstyling/>
    <Form/>
    <LifeCycle/>
    {/* <Mounting1/> */}
    <Upadting1/>

    <FragmentDemo/>
    <Table/>
    
    <ParentComp/>
    <ParentMemo/>

    <RefDemo/>
    <ParentRef/>
    <FRParent/>

    {/* <PortalDemo/> */}
    {/* Some error occured so i commented this */}
    
    <ErrorBoundary>
    <Sample admin="shan"/>
    </ErrorBoundary>

    <ErrorBoundary>
    <Sample admin="stark"/>
    </ErrorBoundary>

    <ErrorBoundary>
    <Sample admin="unknown"/>
    </ErrorBoundary>

   
   <Counter name= "Shan"/>
   <Hover/>
   
   <RenderProps render={(isLog)=> isLog ?"shan": "guest"}/>

   <RendP render={(count,handleCounter)=>(
    <Counter2 count={count} handleCounter={handleCounter}/>
   )}/>
   
   <RendP render={(count,handleCounter)=>(
    <Hover2 count={count} handleCounter={handleCounter}/>
   )}/>
   
   <UserProvider value="shan">
   <ContextA />
   </UserProvider>

   {/* <ContextA/>   */}
   {/* Default value */}

   <GetReq/>
   <PostReq/>

    </div>
  );
}

export default App;
