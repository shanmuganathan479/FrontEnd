import React from "react";

 
const PriceContext = React.createContext()

 const PriceProvider = PriceContext.Provider

 const PriceConsumer = PriceContext.Consumer

 export { PriceContext,PriceProvider,PriceConsumer}

 const MobileContext = React.createContext()

 const MobileProvider = MobileContext.Provider

 const MobileConsumer = MobileContext.Consumer

 export default MobileContext
 export {MobileProvider,MobileConsumer}

