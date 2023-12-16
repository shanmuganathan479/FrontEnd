const values=["shans","unna ","mei","mirshat"]

const p1=new Promise((resolve,reject)=>
{

    let len=values.length
    // console.log(len)
    if(len<=3)
    {
     resolve("You are a group and you are more than 4")
    }
    else{
        reject("you  might be less than 4")
    }
    

})
p1.then(console.log).catch(console.log)
