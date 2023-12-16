// const configureStore  = require("@reduxjs/toolkit").configureStore
// const cakeReducer = require("../features/cake/cakeSlice")
// const iceCreamReducer = require("../features/iceCream/iceCreamSlice")
// const userReducer = require("../features/user/userSlice")

// const reduxlogger = require("redux-logger")

// const logger = reduxlogger.createLogger()
// const { configureStore } = require("@reduxjs/toolkit")

import { configureStore } from "@reduxjs/toolkit"
import cakeReducer from "../features/cake/cakeSlice"
import iceCreamReducer from "../features/iceCream/iceCreamSlice"
import userReducer from "../features/user/userSlice"

const store =configureStore({
    reducer:{ 
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

// module.exports = store
export default store


 