// Asynchronous
// It can perform long network requests without blocking the main thread
// Example :in hotels waiter take order and pass to kitchen and move to next table
// AJAX
console.log('first run');
setTimeout(()=>{
  console.log('second run');
},3000);
  console.log('third run')
// synchronous
// It can process one at a time,other request wait until the first one completes
// Example :in bank lines or petrol set queues
// FIFO(FIRST IN FIRST OUT)
function sync(){
  console.log('hai');
  console.log('welcome')
}
sync();


// Callback
// A Function that is passed into another function as a parameter then invoked by that other Function
function callback(){
  console.log('coming from callback');

}
function high(fn){
  console.log('about to call callback');
  fn(); //Callback function is invoked
  console.log('callback has been invoked')

}
high(callback);
// callback used
// . Advanced Array Method
// .broswer Event
// .Ajax requests
// .React development

// links :https://web.dev/promises/
// ->  https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
function greet(name,formatter){
  return "Welcome to , " + formatter(name);
}
 greet('john',function(name){
   return name.toUpperCase();
 });
 greet('john',function(name){
   return name+"!!!!!!!!";
 });

 
