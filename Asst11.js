function X () {
    console.log("JavaScript");
}
X ();


function Addition (A,B) {
    let Add = (A+B);
    console.log(Add);
}
Addition(3,4);


let Arrow = () => {
    console.log("JavaScript");
}
Arrow();

var x = 21;
var girl = function () {
    console.log(X);
var X = 20;
}
girl();

// ANS : undefined

var x = 21;
  a();
  b();
    console.log(a);
a = function() {
    x = 20;
    console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

// ANS : Uncaught ReferenceError: a is not defined

 