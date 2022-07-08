 class Father{
   constructor(){
     return("I am join");
   }
   bike(){
     return("Honda");
   }
   car(){
     return('BMW');
   }
 }
 class Son extends Father{
   constructor(){
     super();
   }
   car(){
     return('tesla');
   }

 }
  let son1=new Son();
 console.log(son1.bike());
console.log(son1.car());
