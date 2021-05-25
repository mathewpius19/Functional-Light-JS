//impure function as foo refers to values y and z which is outside its scope.
function foo(x){
    y++;
    z=x*y;
}

// var y=5, z;
//  foo(20)
//  z;

//  foo(25);
//  z;

//Wrapping  it inside a pure function

function bar(x,y){
    var z;
    foo(x);
    return [z,y];

    function foo(x){
        y++;
        z= x*y;
    }
}

console.log(bar(5,20)); // [105,21]
console.log(bar(6,30)); // [186,31]

//Method 2 with refernce to impure function on line 1

function bar2(curX, curY){
    var [origY, origZ] = [y,z]
    y = curY
    foo(curX)
    var [newY, newZ] = [y,z]
    // console.log("this is new", [newY, newZ]);
    [y,z] = [origY, origZ]
    return [newY, newZ];
}
var y,z;
var result = bar2(5,20);
console.log(result);