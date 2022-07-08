// Promises  use in Asynchronous
// In 2015 es6  (alternative for callback)
// Promises is an object that represents a task that will be completed in the future

// resolve
const p1=new Promise(function(resolve,reject){
 resolve([1,2,3,4]);

});
p1.then(function(arr){
  console.log('promise resolved',arr)
});
// reject
const q1=new Promise(function(resolve,reject){
  reject("error")
});
q1.then(function(data){
  console.log('promises q1 resolved with data',data);

}).catch(function(data){
  console.log('promises q1 was rejected with data');
});

// await
const getData=async()=>{
  try{
    const data=await promise;
  console.log(data);
}catch(err){
  console.log(err);
}
};
getData();

// one Example
var s1=new Promise(function(resolve,reject){
  var num=Math.random();
  if (num<0.5){
    resolve(num);
  }else{
    reject(num);
  }
});
s1.then(function(result){
  console.log("Success:",result);

}).catch(function(error){
  console.log("Error:",error);
});

// Promises with async code
var promise=new Promise(function(resolve,reject){
  setTimeout(function(){
    var randomInt=Math.floor(Math.random()*10);
    resolve(randomInt);
  },4000);
});

promise.then(function(data){
  console.log('random ini passed to resolve:', data);

});

// promise chaining
var pro=new Promise(function(resolve,reject){
  setTimeout(function(){
    var randomInt=Math.floor(Math.random()*10);
    resolve(randomInt);
  },500);
});

pro.then(function(data1){
  console.log('random 1st ini passed to resolve:', data1);
return new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve(Math.floor(Math.random()*10));
  },3000);
});
}).then(function(data1){
  console.log("random 2nd ini passed to resolve:",data1);
});

// example 2 for promise chaining
var promise2=new Promise(function(resolve,reject){
  resolve(5);
});
promise2.then(function(data){
  return data*2;
}).then(function(data){
    return data+20;
}).then(function(data){
    console.log(data);
});
