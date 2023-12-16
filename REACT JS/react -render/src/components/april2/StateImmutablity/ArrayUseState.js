import React,{useState} from 'react'

const initState= ["sony","iPhone","HTC","Blackberry"]

const ArrayUseState = () => {

    const [brands, setBrands] = useState(initState)

    const handleAdd =()=>{
        // brands.push("Nokia")
        // brands.push("Samsung")
        // setBrands(brands)

        // Wrong way..................

        const newBrand = [...brands]
        newBrand.push("Nokia")
        newBrand.push("Samsung")
        setBrands(newBrand)


    }
    
    console.log("ArrayUseState")
  return (
    <div>
        <h1>State immutablity =ArrayUseState</h1>
        <button onClick={handleAdd}>AddBrands</button>
        {
            brands.map((brand,index)=>{
                return <h3 key={index}>{brand}</h3>
            })
        }
    </div>
  )
}

export default ArrayUseState