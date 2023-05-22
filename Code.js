let max = prompt("enter max number ")

max = Number.parseInt(max)

let min = prompt("enter min number")

min = Number.parseInt(min)

let chances = prompt("enter number of chances you want")

chances = Number.parseInt(chances)

let a = Math.random(min,max)* (max-min)+min

let guess = Math.trunc(a)

if( (max/2) > guess){

    console.log("number is lower than ", max/2)

} 

if((max/2) < guess){

    console.log("number is greater than ", max/2)

} 

let displaychances = chances;

let num;

let i  = 0;

do{

num = prompt("guess the number")

num = Number.parseInt(num)

if(num > guess){

  console.log("number is lower")

}

if(num < guess){

  console.log("number is higher")

} 

  i++; 

  displaychances--;

  console.log("you have left ",displaychances,"chances");

  if(chances == i){

    console.log("your chances are completed ")

    break;

  }

}while((num != guess));

  console.log("correct answer is ", guess)
