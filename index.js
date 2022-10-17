let a=-100;


if (a) {
  console.log ('+++');
} else {
  console.log ('---');
}
  
let arr = [
  "test",
  123,
];
console.log (arr);
arr.push ("++")
console.log (arr);

let person = {
  age:25,
  name:"name",
}
  
console.log (person.name);

let key= "age"
console.log (person [key]);
console.log ("name" in person)

/*
for (let i=0; i <= 10; i+=2){
  console. log (i);
}
*/

let i=1;
console.log (i);
console.log (i++);
console.log (i);
console.log (++i);
console.log (i);

// Задача вывести автора и его произведение
let books={};
books.fantasy=[
  {author: 'Айзек', title: 'Я, робот'},
  {author: 'Роберт', title: 'Звездный десант'},
  {author: 'Герберт', title: 'Мир'},

]
for (let i=0; i < books.fantasy.length; i++){
  let {author, title} = books.fantasy[i];
  console.log (`${i+1}) Автор: ${author}, ${title}`);
}
