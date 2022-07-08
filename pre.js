function student(name, surname, number, grades = []) {
  this.name = name;
  this.surname = surname;
  this.number = number;
  this.grades = grades;
  this.average = function() {
    return this.grades.reduce((a, c) => a + c, 0) / this.grades.length
  }
}

var student1 = new student("Peter", "Cat", 14444, [2, 3, 4]);
console.log("Average: ", student1.average())

// add another grade:
student1.grades.push(6)
console.log("New Average: ", student1.average() )



function Cart() {
    const products = [];
    
    function addProduct(product){
      products.push(product);
    }
    
    function getTotalPrice(){
      return products.reduce((total, p) => total + p.price, 0);
    }
    
    return {
     addProduct,
     getTotalPrice
    }
  }
  
  const cart = Cart();
  cart.addProduct({name: 'orange', price: 1.25});
  cart.addProduct({name: 'lemon', price: 1.75});
  console.log(cart.getTotalPrice());
  //3


  class Person {

    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  
  }
  const giles = new Person('kine');

giles.introduceSelf();
  class Professor extends Person {

    teaches;
  
    constructor(name, teaches) {
      super(name);
      this.teaches = teaches;
    }
  
    introduceSelf() {
      console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }
  
    grade(paper) {
      const grade = Math.floor(Math.random() * (5 - 1) + 1);
      console.log(grade);
    }
  
  }
  const walsh = new Professor('Walsh', 'Psychology');
walsh.introduceSelf();  // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade('my paper'); // some random grade
  