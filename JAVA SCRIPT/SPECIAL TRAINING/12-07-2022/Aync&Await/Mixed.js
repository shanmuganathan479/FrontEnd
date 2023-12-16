

const details=[
    {name:"shan",id:"109"},
    { subjects:   
      [
        {subject1:"Thermodynamics"},
        {subject2:"Kom"},
        {subject3:"em"},
        {subject4:"dom"},
        {subject5:"fm"},
        {subject6:"fme"}
      
      ]
      
    }
]


const method=async()=>{

    await details.find((m)=>{
      console.log(m)
    })
}
method();


