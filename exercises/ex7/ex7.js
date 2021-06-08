// code here! :)

//1

function num1(){
    return 3
}

function num2(){
    return 5
}

function num3(){
    return 7
}

function num4(){
    return 9
}

function num5(){
    return 11
}

num1()//5
num2()//6

//2

function add(x,y){
    return x+y
}

a = num1()
b = num2()
result = add(a,b); //11

//3

function add2(fn1,fn2){
    return add(fn1(), fn2());
}

//4

function constant(v){
    return function(){
        return v
    }
}

//5
var fnList = [num1, num2, num3, num4, num5]

// function addn(list){ //iterative
//     var sum = 0;
//     var result = 0;
//     for(var i=0;i<list.length-1;i++){
//         sum =  add2(list[i],list[i+1])
//        result+=sum
//     }
//     return result
// }
function addn(fns){
    fns = fns.slice()
    while(fns.length>2){
        let [fn0,fn1,...rest] = fns
        fns = [
            function(){
                return add2(fn0,fn1)
            },
            ...rest
        ]
    }
    return add2(fns[0], fns[1])
}

console.log(addn(fnList));//35

//Recursive solution
function addnRec([fn0, fn1, ...fns]){
    if(fns.length>0){
        return addnRec(
            [
                function(){
                    return add2(fn0, fn1)
                }
                ,
                ...fns
            ]
        )
    }
    return add2(fn0,fn1)

};

console.log(addnRec([num1,num2,num3,num4,num5]))//35

//List Transformation solution

function addnTrans(fns){
    return fns.reduce(
        function(composedFn, fn){
            return function(){
            return add2(composedFn, fn)
        }
    }
    )();
}

console.log(addnTrans(fnList))//35

//6

var dupList = [1,2,4,4,6,7,7,9,0];

var filterList = dupList.filter((el,idx,arr)=>{
    if(idx === arr.indexOf(el)){
        return true
    }
    else{
        return false
    }
})

var reduceList = dupList.reduce(function(newList,v){
    if(newList.indexOf(v)===-1){
       return  newList.concat(v) // this ensures that we do not mutate the list that has been passed into the function
    }
    return newList
},[]) // the empty array here is the initial value for the reduce function

console.log("This is unique",reduceList)//[1,2,3,6,7,9,0]
console.log("This is unique filter",filterList)//[1,2,3,6,7,9,0]

//7 

var evenList = reduceList.filter(el => el%2===0)
console.log("This is evenList",evenList) //[2,4,6,0]

//8

functionList = evenList.map(constant) //using map utility we made every number a function in evenList
console.log(addn(functionList)); 