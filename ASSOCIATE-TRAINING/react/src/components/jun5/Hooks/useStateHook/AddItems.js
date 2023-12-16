import React,{useState} from 'react'

const AddItems = () => {

    const [item, setitem] = useState([])

    const handleAdd=()=>{
        setitem([...item,{
            id: item.length,
            value: Math.floor(Math.random() * 100)+1
        }])
    }
  return (
    <div>
        <h2>AddItems</h2>
        <button onClick={handleAdd}>Add</button>
        <ul>
            {
                item.map((val)=>{
                 return  <li key={val.id}>{val.value}</li>
                })
            }
        </ul>
    </div>
  )
}

export default AddItems