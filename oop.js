// class:student
// objects:name,age,roll,mobile

class student{
  // constructor function:mapping
  constructor(id,name,age,mobile){
    // this keyword:
    this.id=id;
    this.name=name;
    this.age=age;
    this.mobile=mobile;
  }
}
stu1=new student(1,"john",15,423423423);
stu2=new student(2,"kani",15,2342432);
stu3=new student(3,"jani",12,354645655);

console.log(stu1.name);
console.log(stu2.age);
console.log(stu3);

class school extends student{
  constructor(sc_name,id,name,age,mobile){
    super(id,name,age,mobile);
    this.school_name=sc_name;
  }
  print(){
    return this.name+" studies in "+this.school_name
  }
}
school1=new school('abx','3','jane',12,32323232);
school2=new school('xyz',2,"kamal",23,45465465)
console.log(school1.print());
console.log(school2.print());




// example 2
// class MoneyManage{
//   constructor(){
//     this.myMoney=100;}
//     addMoney(newAmount){
//       this.myMoney=this.myMoney+newAmount;
//
//     }
//     myTotalAmount(){
//       console.log(myMoney);
//     }
//   }

// example 2
class Employee{
  constructor(money){
    this.money=money;
    //     this.money=4000;

  }
  get myMoney(){
    return 'Rs'+this.money;
  }
  set myMoney(newAmount){
    this.money+=newAmount;
  }

}
let emp=new Employee(4000);
console.log(emp.myMoney);
emp.myMoney=1000;
console.log(emp.myMoney);
