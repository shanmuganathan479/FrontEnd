import React,{useState} from 'react'

function UseStateArray() {

    const [items,setItems] = useState([])

    const handleAdd=()=>{
        setItems([...items,{
            id: 109,
            value: Math.floor(Math.random()*100) + 1
        }])
    }
  return (
    <div>
        <h1>UseState with Array</h1>
        <button onClick={handleAdd}>Add Items</button>
        {items.map((item)=>{
            return <h3 key={item.id}>{item.value}</h3>
        })}
    </div>
  )
}

export default UseStateArray