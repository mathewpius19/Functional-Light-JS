function unary(fn){
    return function one(arg){
        return fn(arg);
    }
}

function binary (fn){
    return function two(arg1, arg2){
        return fn(arg1, arg2)
    }
}

function fn(...args){ // variatic fn
    console.log(args);
}

//g and h acts as a wrapper around the variatic function fn to constrict the number of arguments to be used to just 1 and 2.
var g = unary(fn);
var h = binary(fn);

g(1,2,3,4);
h(5,6,7,8)

function flip(fn){ // utility function used to flip the arguments
    return function flipped(arg1,arg2, ...args){
        return fn(arg2,arg1,...args);
    }
}

var i = flip(fn)
i(1,2,3,4,5) //[2,1,3,4,5]

//utility function to reverse the arguments
function reverseArgs(fn){
    return function reversedArgs(...args){
        return fn(...args.reverse());
    }
}

var j = reverseArgs(fn)
j(5,6,7,8,9) // [9,8,7,6,5]

//utility function to spread or apply induvidual values from an array to arguments
function spreadArgs(fn){
    return function spread(args){
        return fn(...args)
    }
}

//utility function to accpet induvidual args and return an array
function gatherArgs(fn){
    return function gather(...args){
        return fn(args)
    }
}

function f(x,y,z){
    console.log(x+y+z);
}
function fg(x){
    console.log(x);
}
var k = spreadArgs(f)
var l = gatherArgs(fg)
k([1,2,3]) // 6
l(1,2,3,4) // [1,2,3,4]

//Point Free style

function isOdd(v){
    return v%2==1
}
//use a utility function to reduce  using point style
function negate(fn){
    return function not(...args){
        return !fn(...args)
    }
}

var even = negate(isOdd)
console.log(even(4))//true
console.log(even(5))//false