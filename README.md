# Functional-Light-JS
Notes and Code from Functional Light JS

# Avoid/Reduce Side Effects
* avoid using functions that has side causes and side effects. Always make sure there is a direct input and a corresponding direct output.

# Techniques to  control side effects in your program:
* Try wrapping the side effects inside a pure wrapper i.e. a pure function.

* If a function access something outside of itself and changes something in the overall system, then that function is not pure.

* If a function returns the same output for a given input fed any number of times, its considered a pure function.

# Arguments
* Unary function accepts one argument, binary function accepts two arguments, n-ary function accepts n arguments.
* Try to modify your code to use unary or binary functions rather than n-ary functions.
* Function that takes any number of arguments is called a variatic function.

# Point free style
* Restrict yourself from using functions that uses an argument to pass through to another function using the same argument. Create utility functions to generalize your functions.

```js
function isOdd(v){
    return v%2==1
}

function isEven(v){
    return !isOdd(v) // instead of repeating isOdd here use a negate utility function
}
```

# Function Composition

* Refers to a function that uses the output of another function as direct input.
* Figure out ways to make code for declarative rather than imperative by using code abstraction.

```js
function sum(x,y){
    return x+y
}
function mult(x,y){
    return x*y
}
var result = mult(1,2)
sum(result,3)//5
// instead of creating three separate functions and storing it in a variable to get a result, try making it in one complete step.
```

* Try automating the task of function composition, i.e two functions in which one takes the output of the other as input.(refer file FunctionCompositon)
* This is called a Higher Order Function. A Higher Order Function is a function that either or both takes one or more functions as inputs and/or makes a function as an output.

```js
foo(bar(baz(2)));
compose(foo,bar,baz)(2) //order the functions the way you wanna list it
pipe((baz,bar,foo)(2) // order the functions the way they are executed
```
* Design the functions you feed into compose or pipe to be unary for easier usage
```js 
function composeRight(fn2, fn1){
    return function compose(...args){
        return f2(f1(...args)); // fn2 takes one input as fn1 gives out only one output.Therefore make sure you feed unary functions.
    }
}
```
# Immutability
* const keyword gives you assingment immutability but not value immmutability.
* Instead of changing values that are defined by someone in a program, create a copy of that value and then use it.
``` js
function doubleMutable(list){
    var newList = []
    for(var i=0;i<list.length;i++){
        newList[i] = list[i]*2 // here we create a new array to store the changed values.
    }
    return newList
}
var result = doubleMutable([1,2,3,4])
```

# Closure
* Closure is when a function 'remembers' the variables around it even when the function is executed elsewhere.
``` js
function unary(fn){
    return function one(arg){
        return fn(arg) // it is able to reference fn here because of closure.
    }
}
```

# Specializing a generalized utility (Partial Application)
* we can define specialized functions from a given generalised function to do specific tasks and make our work easier.
* eg
``` js 
function add(x,y){
    return x+y;
}
function partial(fn, ...firstArgs)
{
    return function applied(...lastArgs)
    {
        return fn(...firstArgs, ...lastArgs)
    };
}

var addToTen = partial(add, 10) // here we create a specialized version of add to add 10 to any value.
addToTen(32) // 42
```
# Currying
* Currying and partial application are two different techniques to specialize a generalized function.
* Currying accepts all inputs one by one and returns  a specialized function for each of that input untill all the inputs are completely accepted. After this it returns the orginal function as a specialized one.

```js

var add3 = curry(function add3(x,y,z){
    return x+y+z;
})

var f = add3(3) //f is a specialized fn of add3
var p = f(4) // p is a specialized fn of f which is a specialized fn of add3
p(5); //12 // in the end, it calls the orginal fn with all the three inputs

add3(3)(4)(5); //12
```

# Recursion
* Recursion is when a function keeps calling itself until it reaches a base condition and it stops calling itself.
* Recursion and iteration are isomorphic.
* Proper Tail Call form: Rearranging your recursive function so that the memory on the call stack will not be exhausted and you have unlimited memory or itll run in a fixed amount of memory.
* A tail call occurs when a function calls another as its last action, so it has nothing else to do. A PTC does not need any extra stack space when doing a tail call.
* Continuation Passing Style(CPS) which is organizing code so that each function receives another function to execute at its end.
* Trampoline functions are functions that are similair to CPS but instead of passing a function it will return a function if a function is the result of the function being called.

# List Transformations
* MAP: Perform a utility function for each item in a list. Creates an array of the same size with the mapped results in it.
* FILTER: Perform a utility filter function on each item and returns true or false.If its true we add it into the result array and if its false we filter it out. Creates an array either shorter or same size of the original array.
* REDUCE: Array.reduce() method is a combiner. Just like the map() method, reduce() iterates through a list performing a transformation on each value. The difference is an initial value is also passed which the items are composed onto creating a smaller, "reduced" list or even a single return value.

* FUSION: Fusion is when we take a series of adjacent list operations and combine these utilities into one operator or function.
* TRANSDUCING: They are composable and efficient data transformation functions that do not create intermediate collections.