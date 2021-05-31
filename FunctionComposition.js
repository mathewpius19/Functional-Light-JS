function sum(x,y){

    return x+y
}

function mult(x,y){
    return x*y
}

function multSum(x,y,z){
    return sum(mult(x,y),z)
}

//now we have a single function to calculate our result
console.log(multSum(1,2,3))//5

//Automating the task

function piped(fn1, fn2){ // generalised function that automates the task of creating a compostion function.
    return function pipe(arg1,arg2,arg3){
        return fn2(fn1(arg1,arg2),arg3)
    }
}

var multSumPiped = piped(mult,sum)
console.log(multSumPiped(1,2,3)) //5
    