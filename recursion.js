function sumRec(sum, num, ...nums){
    if(nums.length===0) return sum+num
    else return sum + sumRec(num, ...nums)
}

console.log(sumRec(1,2,3,4,5,6)) //21

//Proper Tail Calls

"use strict";

function foo(x){
    if (x<10) return x
    return bar(x)
}
function bar(x){
    return x/2;
}

console.log(foo(42));

//using PTC for sumRec

"use strict";

// var sumRec = (function (){
//     return function(...nums){
//         return recur(...nums)
//     };



// function recur(sum, num, ...nums){
//     sum+=num
//     if(nums.length==0) return sum
//     else {
//         return recur(sum,...nums);
//     }
// }
// })()

// instead of calling a function recur separetly, we can do it directly as below
function sumRec(sum, num, ...nums){
    sum+=num
    if(nums.length==0) return sum
    return sumRec(sum, ...nums)
}

console.log(sumRec(1,2,3,4,5)) //15

//CPS

"use strict"

var sumRecur = (function (...nums){
    return function(...nums){
        return recur(nums, v=>v) // here we pass in a continous function that will be passed into recur for sum calculation.
    }
    function recur([sum, ...nums], cont){
        if(nums.length==0) return cont(sum)
        return recur(nums, function(v){
            return cont(sum+v)
        })
    }
})();

console.log("CPS Style:",sumRec(3,4,5,6,7));

//Trampoline

function Trampoline(fn){
    return function trampolined(...args){
        var result = fn(...args)
    
    while(typeof result == "function"){
        result =  result() // if we get a function as a result, we call the function again and again until we get non function as result.
    }
    return result
};
}

//example of using trampoline utility
var sumTrampolined = Trampoline(function f(sum, num, ...nums){
    sum+=num;
    if(nums.length==0) return sum;
    return function(){
        return f(sum,...nums)
    };
});

var trampolinedResult = sumTrampolined(3,4,5,6,7,8,9)
console.log("Trampolined Result:",trampolinedResult);