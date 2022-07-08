// program to show the change in global variable
let a = "hello";

function greet() {
    a = 3;
}

// before the function call
document.write(a);

//after the function call
greet();
document.write(a); // 3