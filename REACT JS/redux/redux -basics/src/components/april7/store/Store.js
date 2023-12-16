import React from 'react'

const Store = () => {
  return (
    <div>
        <h1>Store</h1>
        <h3>One store for entire application</h3>
        <h3>Responsiblity</h3>
        <ol>
            <li>Hold app state</li>
            <li>getState() - access the application state</li>
            <li>dispatch(action) - any update made through this</li>
            <li>subscribe(listener) - accept function any state change it will execute</li>
            <li>unsubscribe() unregister the function return the listener</li>
        </ol>
    </div>
  )
}

export default Store