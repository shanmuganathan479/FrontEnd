import React from 'react'

const ConfiguringStore = () => {
  return (
    <div>
        <h1>ConfiguringStore</h1>
        <h2 className='note'>Responseblities</h2>

        <h3>Hold app state</h3>
        <h3>Allow state through getState()</h3>
        <h3>Allow state update through dispatch(actionCreator)</h3>
        <h3>Register listener through subscribe(listeners)</h3>
        <h3>Unregister listener return subscribe again</h3>

        <h2 className='note'>Note:- First we need to subscribe() and we need to use dispatch(action). If u do reversely it will act as unsubscribe()</h2>

    </div>
  )
}

export default ConfiguringStore