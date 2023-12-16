const p1=new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("Success")
},2000)
})
p1.then(console.log)

 const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Failed")
    },2000)
    })
    p2.then(console.log).catch(console.log)


    //promise with arguement
    const p3=value =>new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(value+100)
        },2000)
        })
        
        p3(50).then(console.log)
        p3(50).then(x => x+200).then(console.log) // promise chaining
    
