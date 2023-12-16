import React from 'react'

const ReduxThunkMiddleWare = () => {
  return (
    <div>
        <h1>ReduxThunkMiddleWare</h1>
        <h2>Define async action creator (MiddleWare)</h2>

        <ol>
          <li>create middleWare</li>
          <li>pass to reducer </li>
          <li>import axios</li>
          <li>import thunk pass to middleWare</li>
          <li>action creator that return function (side effects)</li>
          <li>subscribe</li>
          <li>dispatch action creator</li>
        </ol>
    </div>
  )
}

export default ReduxThunkMiddleWare