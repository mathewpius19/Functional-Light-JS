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