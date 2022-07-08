// program showing block-scoped concept
// global variable
let a = 'Hello';

function greet() {

    // local variable
    let b = 'World';

    document.write(a + ' ' + b);

    if (b == 'World') {

        // block-scoped variable
        let c = 'hello';

        document.write(a + ' ' + b + ' ' + c);
    }

    // variable c cannot be accessed here
    document.write(a + ' ' + b + ' ' + c);
}

greet();