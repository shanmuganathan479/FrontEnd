import "./App.css";
import {
  AppleProvider,
  SonyProvider,
} from "./components/jun20/ContextAPI/AppleContext";
import Shop1 from "./components/jun20/ContextAPI/Shop1";
import HRDepartment from "./components/jun20/objectContext/HRDepartment";
import UserCheck from "./components/jun20/stateAsContext/UserCheck";

// import ImportExport from "./components/jun1/Import&Export/Import&Export";
// import Default from "./components/jun1/Import&Export/Default";
// import OtherName from "./components/jun1/Import&Export/DefaultWithOtherName";
// import { Named, Named2 } from "./components/jun1/Import&Export/Named";
// import { NamedWithOtherName as OtherNamed } from "./components/jun1/Import&Export/NamedWithOtherName";
// import Combination from "./components/jun1/Import&Export/Combination";

// import PurposeOfJsx from "./components/jun1/Jsx/PurposeOfJsx";
// import WithoutJSX from "./components/jun1/Jsx/WithoutJSX";
// import CreatingNesting from "./components/jun1/CreatingAndNestingComponents/CreatingNestingComponent";
// import Curlybraces from "./components/jun1/Jsx/JSXUsage";
// import Parent from "./components/jun1/CreatingAndNestingComponents/BikeList";
// import Styling from "./components/jun1/AddingStyle/VaroiusStyling";

// import ConditionalRendering from "./components/jun1/ConditionalRender/ConditionalRendering";

// import { TernaryOpertor } from "./components/jun1/ConditionalRender/GusetUser";
// import ShortCircuit from "./components/jun1/ConditionalRender/LoggedInUser";
// import IfElse from "./components/jun1/ConditionalRender/LoginUser";
// import ElementVariable from "./components/jun1/ConditionalRender/SignupUser";
// import RenderingList from "./components/jun1/RenderingList&Data/ArrayRendering";
// import ObjectExample from "./components/jun1/RenderingList&Data/ObjectRendering";
// import ParentObject from "./components/jun1/RenderingList&Data/MobileData";
// import EventHandling from "./components/jun1/RespondingEvent/MulitpleEvent";
// import EventHandlingClassComp from "./components/jun1/RespondingEvent/AlertMessage";
// import ParentEvent from "./components/jun1/RespondingEvent/AlertFromParent";
// import UpdatingScreenFunc from "./components/jun1/UpdatingScreen/FunctionBased/Login";
// import Signup from "./components/jun1/UpdatingScreen/ClassBased/Signup";
// import ChangingColor from "./components/jun1/UpdatingScreen/LIfeCycle/ComponentDidmount/ChangingColor";
// import ContentChange from "./components/jun1/UpdatingScreen/LIfeCycle/ComponentDidUpdate/ContentChange";
// import DeletingMessage from "./components/jun1/UpdatingScreen/LIfeCycle/ComponentWillunmount/DeletingMessage";
// import ChangingColor2 from "./components/jun1/UpdatingScreen/LIfeCycle/ComponentDidmount/ChangingColorFromProps";
// import { Timer } from "./components/jun5/Hooks/useRefHook/StopTimer";
// import Container from "./components/jun5/Hooks/useCallbackHook/Container";
// import Counter from "./components/jun5/Hooks/useStateHook/Counter";
// import Fullname from "./components/jun5/Hooks/useStateHook/Fullname";
// import AddItems from "./components/jun5/Hooks/useStateHook/AddItems";
// import TitleCounter from "./components/jun5/Hooks/useEffectHook/TitleCounter";
// import MouseTrackerContainer from "./components/jun5/Hooks/useEffectHook/MouseTrackerContainer";
// import Timer2 from "./components/jun5/Hooks/useEffectHook/Timer2";
// import FocusElement from "./components/jun5/Hooks/useRefHook/FocusElement";
// import ContextA from "./components/jun6/UseContext/ContextA";
// import {
//   MobileProvider,
//   PriceProvider,
// } from "./components/jun6/UseContext/MobileContext";
// import DoubleCounter from "./components/jun6/UseMemo/DoubleCounter";
// import ReducerCounter from "./components/jun7/UseReducer/ReducerCounter";
// import App2 from "./components/jun7/UseReducer/UseContext+UseReducer/App2";
// import UniqueId from "./components/jun7/UseId/UniqueId";
// import ShowContent from "./components/jun7/UseTransition/ShowContent"
// import NameChanging from "./components/jun7/UseLayout/NameChanging";
// import ElectronicsShop from "./components/jun12/API/axios/IndiumMall";
// import QuotesByAuthors from "./components/jun12/API/fetch/QuotesByAuthors";
// import Post from "./components/jun12/Iteration/Post";
function App() {
  return (
    <div className="App">
      <h1>Indium Associate Training</h1>
      {/* <ImportExport />
      <Default />
      <OtherName />
      <Named />
      <Named2 />
      <OtherNamed />
      <Combination /> */}

      {/* <PurposeOfJsx />
      <WithoutJSX />
      <Curlybraces />

      <CreatingNesting />
      <Parent /> */}

      {/* Nesting */}

      {/* <Styling />

      <ConditionalRendering />
      <IfElse />
      <ElementVariable />
      <TernaryOpertor />
      <ShortCircuit />

      <RenderingList />
      <ObjectExample />
      <ParentObject /> */}

      {/* <EventHandling />
      <EventHandlingClassComp />
      <ParentEvent />

      <UpdatingScreenFunc />
      <Signup /> */}

      {/* Lifecycle */}

      {/* <ChangingColor />
      <ChangingColor2 color="purple" />
      <ContentChange />
      <DeletingMessage /> */}

      {/* Hooks */}

      {/* <Counter />
      <Fullname />
      <AddItems />
      <TitleCounter /> */}

      {/* <MouseTrackerContainer />
      <Timer2 />
      <Container />
      <Timer />
      <FocusElement /> */}

      {/* <MobileProvider value={"Iphone 14 pro"}>
        <PriceProvider value={"1,20,000 rs"}>
          <ContextA />
        </PriceProvider>
      </MobileProvider>
      <DoubleCounter/>

      <ReducerCounter/>
      <App2/>

      <UniqueId/>
      <NameChanging/>
      <ShowContent/>
    */}

      {/* <ElectronicsShop/>
      <QuotesByAuthors/>
      <Post/> */}

      <AppleProvider value="iphone 14 pro">
        <SonyProvider value="Xperia 5 iii">
          <Shop1 />
        </SonyProvider>
      </AppleProvider>
 
      <UserCheck/>
      <HRDepartment/>
    </div>
  );
}

export default App;
