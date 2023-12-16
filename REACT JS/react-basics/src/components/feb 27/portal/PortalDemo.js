import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalDemo() {
  return  ReactDOM.createPortal(
    <div>
        <h1>Portals (Inspect me and note the DOM tree structure)</h1>
        <p>This element comes under the portal root div</p>
        <h2>USE</h2>
        <p>Portal provide ability to breaks out from DOM node</p>
    </div>,
  document.getElementById('portal-root')
  ) 
}

export default PortalDemo