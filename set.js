class Square{
    constructor(width){
        this.width=width;
        this.height=width;
        this.noofcount=0;
    }
    get area(){
        this.noofcount++;
        return this.width*this.height;
    }
    // set area(area){
    //  this.width=Math.sqrt(area);
    //  this.height=this.width;   
    // }
}
let square1=new Square(3);
let square2=new Square(5);
let square3=new Square(6);

console.log(square1.area);
console.log(square2.area);
console.log(square3.area);
console.log(square1.noofcount);

square1.area=25;