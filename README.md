# Functional-Light-JS
Notes and Code from Functional Light JS

# Avoid/Reduce Side Effects
* avoid using functions that has side causes and side effects. Always make sure there is a direct input and a corresponding direct output.

# Techniques to  control side effects in your program:
* Try wrapping the side effects inside a pure wrapper i.e. a pure function.

* If a function access something outside of itself and changes something in the overall system, then that function is not pure.

* If a function returns the same output for a given input fed any number of times, its considered a pure function.