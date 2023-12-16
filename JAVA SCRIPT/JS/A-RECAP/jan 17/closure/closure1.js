function add(x){
 
    return function (y){

        console.log(x+y) 
    }
}

const val1=add(100)  //x
val1(8)  //y
