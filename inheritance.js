// example 5
class Vehicle{
  setName(name){
    this.name=name;
  }
  startEngine(){
    console.log('engine start')
  }
  stopEngine(){
    console.log('engine stop')
  }
}
class Car extends Vehicle{
  topSpeed(speed){
    console.log('top speed for '+this.name+" is "+speed)
  }
}
let myCar=new Car();
myCar.setName('Toyato');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);
