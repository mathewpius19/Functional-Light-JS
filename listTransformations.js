var arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.map(el=>el*2)); // multiplies all number by 2

console.log(arr.filter(el=>el%2==1)); // filters in only odd numbers

function acronym(str, word){
    return str+word.charAt(0); // Uses "" as initial value and adds first letter of each word with it.
}

console.log(["Functional", "Light", "Javascript", "Stuff"].reduce(acronym,"")); //FLJS

//Fusion with reduce function

function add1(v){return v+1;}

function mult2(v){ return v*2 ;}

function div3(v) {return v/3 ;}

function isOdd(v){
    return v%2==1
}

function sum(total,v){
    return total+v
}

function composeRight(fn1, fn2){
    return function(...args){
        return fn2(fn1(...args));
    }
}

console.log( arr.map(
    [div3,mult2,add1]
.reduce(composeRight))); // fusion result


//TRANSDUCING



var list = [2,5,8,11,14,17,20]

function curry(f) { 
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }

  
//creating a map function in the form of a reducer by combining a mapping function and a combine function
var mapReducer = curry(function mapReducer(mappingFn, combiningFn){
    return function reducer(list,v){
        return combiningFn(list, mappingFn(v))
    }
})

//creating a filter function in the form of a reducer by combining a filter function and a combine function

var filterReducer = curry(function filterReducer(predicateFn, combiningFn){
    return function reducer(list,v){
        if(predicateFn(v)) return combiningFn(list,v);
        return list;
    }
})

function transduce(transducer, combineFn, initialValue, list){
    var reducer =  transducer(combineFn);
        return list.reduce(reducer, initialValue)
    }

var transducer = composeRight(mapReducer(add1), filterReducer(isOdd));

console.log("transducer result:", transduce(transducer, sum, 0, list));
