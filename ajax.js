// API->application programming interface
// xmlHttpRequest ->support browsers
// mozilla firefox 1.0 
// xmlhttprequest methods ->get data from backend
// xmlhttprequest properties->

// const object={
//     name:"some name",
//     age:10,
// };

// // XMLParser
// const xhr=new XMLHttpRequest();
// xhr.onreadystatechange=function(){
//     if(this.readyState==4&this.status==200){
//         console.log('ok');
//     }
// };
// xhr.open('GET','ajax_info.txt',true);
// xhr.send();
// console.log(xhr);
// Json
document.querySelector('button').addEventListener('click',()=>{
let xhr=new XMLHttpRequest();
// new xmlHttpRequest
// read text file
// console.log(xhr.readystate);

// xhr.open("GET","sample.txt",true); //http method
// xhr.onreadystatechange=function(){
//      console.log(xhr.readystate);
//      if(xhr.readyState===4 && xhr.status===200){ //404-not found 403-forbidden
// console.log(xhr.responseText);
//     }
//  }
// xhr.send();
// });

xhr.open("GET","sample.json",true); //http method
xhr.onreadystatechange=function(){
    // console.log(xhr.readystate);
    if(xhr.readyState===4 && xhr.status===200){ //404-not found 403-forbidden
console.log(JSON.parse(xhr.responseText).menu.id);
    }
}
xhr.send();
});

// onload
// xhr.open("GET","sample.json",true); //http method
// xhr.onload=function(){
// console.log(JSON.parse(xhr.responseText).menu.id);
//     }
// xhr.send();
// });

// fetch data from API
// xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true); //http method
// xhr.onload=function(){
// console.log(xhr.responseText);
//     }
// xhr.send();
// });