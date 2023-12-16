const { createContext } = require("react");

const BiodataContext =createContext()

const BiodataProvider = BiodataContext.Provider

const BiodataConsumer = BiodataContext.Consumer

export {BiodataProvider,BiodataConsumer}

export default BiodataContext