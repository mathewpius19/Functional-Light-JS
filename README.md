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