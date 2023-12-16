try 
{
 console.log("Starting Point of Execution") 
 shan1();
} 
catch (error) 
{
    console.log(error)
    console.log("it captures the error")
    throw  new Error ('we can throw the error manually ')
}
finally
{
    console.log("it always executes")
}