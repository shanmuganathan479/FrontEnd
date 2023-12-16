const configureStore  = require("@reduxjs/toolkit").configureStore
const cakeReducer = require("../features/cake/cakeSlice")
const iceCreamReducer = require("../features/iceCream/iceCreamSlice")
const userReducer = require("../features/user/userSlice")
// const reduxlogger = require("redux-logger")

// const logger = reduxlogger.createLogger()


const store =configureStore({
    reducer:{ 
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

module.exports = store


 