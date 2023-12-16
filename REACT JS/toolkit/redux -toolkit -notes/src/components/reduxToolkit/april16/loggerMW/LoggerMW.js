import React from 'react'

const LoggerMW = () => {
  return (
    <div>
        <h1>LoggerMiddleware</h1>
        <ol>
            <li>npm i redux-logger</li>
            <li>import redux logger</li>
            <li>logger = reduxLogger.createLogger()</li>
            <li>inside the store</li>
            <li>middleware :(getDefaultMiddleware)=getDefaultMiddleware.concat(logger)</li>
        </ol>
    </div>
  )
}

export default LoggerMW