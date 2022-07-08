// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World"
    document.write(a + b);
}

greet();
document.write(a + b); // error