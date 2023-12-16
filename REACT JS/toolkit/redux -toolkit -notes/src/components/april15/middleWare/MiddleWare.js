import React from 'react'

const MiddleWare = () => {
  return (
    <div>
        <h1>MiddleWare</h1>
        <h3>Suggested way to extend with custom functionality</h3>
        <h3>Mostly used for crash reporting,logging,performing async tasks</h3>

        <h3>logger middleware = print all log statement related to state changes</h3>
        <ol>
            <li>npm i redux-logger</li>
            <li>import reduxlogger</li>
            <li>createlogger from redux logger</li>
            <li>create applymiddleware from redux</li>
            <li>pass applymiddlewate to store as 2nd args</li>
            <li>Pass logger into applymiddleware</li>
            <li>Remove all console log statements</li>
            
        </ol>
    </div>
  )
}

export default MiddleWare