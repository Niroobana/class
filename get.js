const person = {
  firstName: "John",
  lastName: "kamal",
  language: "tamil",
  age:24,
  event:['music','dance'],
  fullname(){
    return`${person.firstName} ${person.lastName}`;
  },
  get lang() {
    console.log('get language');
    return this.language;
  },
  get ages(){
return (this.age/2)
  },
 set lang(val){
   console.log('setting name'+lang(val));
   this.lang=val.toUpperCase();
  }
};
person.firstName="karus";
console.log(person.lang)
console.log(person.fullname());
console.log(person.ages);
console.log(person.event);

