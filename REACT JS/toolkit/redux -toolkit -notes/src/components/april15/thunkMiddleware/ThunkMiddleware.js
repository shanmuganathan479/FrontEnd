import React from 'react'

const ThunkMiddleware = () => {
  return (
    <div>
        <h1>ThunkMiddleware</h1>
        <h2>Thunk is a middleware used to return function we can perform async opeations and dispatch action</h2>
        <ol>
            <li>npm i axios redux-thunk</li>
            <li>import thunk default</li>
            <li>applymiddleware as 2nd args in reducer</li>
            <li>pass thunkmiddleware as args to applymiddleware</li>
            <li>define action creator that returns function</li>
            <li>import axios </li>
            <li>dispatch(Request)</li>
            <li>axios.get</li>
            <li>.then response.data.map() assign to dispacth(actioncreato(args))</li>
            <li>.catch(error.message) dispatch actionCreator(args)</li>
            <li>subscribe store</li>
            <li>dispatch (asyncActioncreator)</li>

        </ol>
    </div>
  )
}

export default ThunkMiddleware