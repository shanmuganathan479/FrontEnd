let sentence="Shanmuganathan"

let len=sentence.length;

console.log(len)

for(i=0;i<len;i++)
{

 const fun1=async()=>{

    await console.log(sentence[i])
 }
 fun1();
}


let sentence2="THIS IS SHAN I AM FROM TIRUVARUR"

let sentence3=sentence2.split();
for(j=0;j<sentence3.length;j++)
{
    const fun2=async()=>{
      await console.log(sentence3[j])
    }
    fun2();
}
