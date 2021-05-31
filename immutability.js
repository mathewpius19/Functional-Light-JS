var z = Object.freeze([1,2,3,[4,5,6]]) //only works on the first level array

z[0]=10; // not allowed
z[3][1] = 7; // allowed