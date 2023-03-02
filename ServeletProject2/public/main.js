/**
 * 
 */
 
 'use strict'
 
 
 //ペー切り替え
 document.getElementById('language').select.onchange = function() {
	location.href = document.getElementById('language').select.value;
}
 
 
/////////////////////////////////////////////////////////DARK MODE///////////////////////




 
 /*
 
 
 function total(price){
	const tax = 0.1;
	return price + (price * tax);
};


document.getElementById('output').textContent = ("The price of product is " + total(500) + ' Yen');
document.getElementById('output1').textContent = ("Your total  is " + total(1200) + ' Yen');
document.getElementById('output2').textContent = (`Your total  is   ${total(5000)}   Yen`);

 
 
 let todo = ["go to burber store", "going to the compnay"];
 for(let item of todo) {
	const li = `<li>${item}</li>`;
	document.getElementById('list').insertAdjacentHTML('beforeend', li);
	
};
 

//配列の例に対して/////////////////////////////////////////////////////////////

//const box = [1,2,4,5,6,7,8, "hello Javascript", false];

//document.getElementById('arry').text.Content = box;
 
const person = {name:"John", age:31, city:"New York"};

document.getElementById('name').textContent = person.name;
document.getElementById('age').textContent = person.age;
document.getElementById('city').textContent = person.city;

const box = [1,2,3,5,6,7,8,"hello Javascript"];
document.getElementById('arrybox').textContent = box;


const computers = {
	name:["Surface Pro 8", "Surface Laptop 4"],
	colors: ["black", "platinum","ice blue", "sandstone"],
	price: [646, 899.99,]
};

document.getElementById('microsoftComputers_name').textContent = computers.name;
document.getElementById('microsoftComputers_colors').textContent = computers.colors;
document.getElementById('microsoftComputers_price').textContent = computers.price;

// const arry = [1,2,3,5,6,7,8,"hello Javascript"];
//arry.unshift('追加したい要素');一番最初の値に追加される。
// const value　＝　arry.unshift(); 一番最小の値が消される。

//form  input output

document.getElementById('form').onsubmit = function(event) {
	event.preventDefault();
	const search = document.getElementById('form').word.value;
	document.getElementById('output3').textContent = `***${search}*** is now searching...`;
}

//CountDown TImer.


//let goal = new Date();
//goal.setHours(23);
//goal.setMinutes(59);
//goal.setSeconds(59);

//console.log(countdown(goal));
//const counter = countdown(goal);
//const time = `${counter[1]}時間${counter[2]}分${counter[3]}秒`;
//document.getElementById('timer').textContent = time;

//countdown timer for world cup 

const goal = new Date(2026,6,1);

function countdown(due) {
	const now  = new Date();
	
	const rest = due.getTime() - now.getTime();
	const sec = Math.floor(rest/1000)%60;
	const min = Math.floor(rest/1000/60)%60;
	const hours = Math.floor(rest/1000/60/60)%24;
	const days = Math.floor(rest/1000/60/60/24);
	const count = [days, hours, min, sec];
	
	return count;
	
}

function recalc() {
	
	const counter = countdown(goal);
	document.getElementById('day').textContent = counter[0];
	document.getElementById('hour').textContent = counter[1];
	document.getElementById('min').textContent = String(counter[2]);
	//padStart(2,'0');
	document.getElementById('sec').textContent = String(counter[3]);
	//padStart(2,'0');
	refresh();
};

function refresh(){
	setTimeout(recalc,1000);
}
recalc();

*/


////////////////////////////////////////////////DROP NAVIGATION////////////////////////
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*
/////////////////////////////////////////////////////FOR文///////////////////////////
const secondexample = [122,444,556,634];
//iは添え字という意味合いがある。ofの時は使わない。
//ofでは添え字が渡ってくる。
for (let i of secondexample){
	console.log(i);
}


//inでは値がわたってくる。
const arry = [1,3,5,6,7,9]
	 for (let i in arry) {
		console.log(i); //output 1,3,5,6,7,9
		}
		
		
const todos = [
	{
	
	id: 1,
	title: "go to a movie theater",
	completed: true
},
	{
	
	id: 2,
	title: "go shopping",
	completed: true
},
	{
	
	id: 3,
	title: "having dinner",
	completed: true
},



]


//for (let i=0; i< todos.length; i++){
	//console.log(todos[i]);　
	//output 
	/*completed: true
	id: 1
	title: "go to a movie theate 
	
	completed: true
	id:2 ..続く
	*/
	//console.log(todos[i].title);　
	//go to a movie theater
	//go shopping
	//having dinner
	
//}


///////////////////////////////////////////////////if文///////////////////////////////////
//「二つの値が一致するかどうか？」の時にIf文を使う。
//２つの　＝＝　の時は左辺と右辺の方は気にしないでデータが等しいかどうかを決める、
//３つの　＝＝＝の時は左辺と右辺のデータの方も含めて等しいかどうかを決める。
/*
const number = 10; 

if (number){
	console.log("Yes");
} else if(true) {
	console.log("No");
} else {
	console.log("error");
}


//////////////////////////////////////////////////関数Functionアロー関数/////////////////
//普通のFunction
//function hello(name) {
	//console.log('hello' + name);
//}

//hello("Tom");

//アロー関数 二行以上の場合は波かっこが必要。一行の時は波かっこ消去可能。

const hello = (name, age) => {
	console.log('hello' + name + age)
	console.log('hello' + name + age)
}
hello("Erran", 27);

//アロー関数はFor文でよく使われる。

const numbers = [1,2,4,5,6,7,8];



numbers.forEach(function(value) {
	console.log(value);
}) //output 1,2,3,4,5,6,7,8

numbers.forEach(value => console.log(value))//output 1,2,3,4,5,6,7,8


//コールバック関数



function hi(getName){
	console.log("hi" + getName());
}



function getName(){
	return "TomFord"
}


hi(getName);

//コールバック関数
function doSomething(a, b, callback) {
	const result = callback(a,b);
	console.log(result);
}

function multiple(a,b) {
	return a * b;
}

doSomething(8, 9, multiple);



const lists = ["number1", "number2", "number3"];

function forEach(lists, callback) {
	for(let i = 0; i < lists.length; i++){
		callback(lists[i])
	}
}

function showLists(list) {
	console.log(list);
}

//function addList(list) {
	//list = "This is " + list
	//showLists(list);
//}

//forEach(lists, addList); // This is number1 .... continue...


//関数を定義せずにforEachを使ってそのまま書くこともできる。
forEach(lists, function(list) {
	list = "This is " + list;
	showLists(list);
});




/*const animals = ["Lion", "Giraff", "Gorilla", "Dog", "Snake", "Rabbit"];*/

//フォー文をつかったときと同じ結果がでる。簡略も可能である。
/*animals.forEach(function(v, i, animals) {
	console.log(v)
})
//アロー関数で書き直すと。。。
/*animals.forEach((v, i, animals)　=> {
	console.log(v)
});*/
//第二第三引数が必要ない場合は、かっこ省略と波かっこも省略できる。
//できるだけ変数をへらすことができる。＝バグが少なくなる。軽くなる。
/*animals.forEach(v　=>console.log(v));


for(let i = 0; i < animals.length; i++) {
	const v = animals[i];
	console.log(v);
}*/




///Reduce method 
/*
const array1 = [4,6,5,7];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);


console.log(sumWithInitial);
// Expected output: 22


const string = "DISNEY WORLD";
const stringArray = string.split('');

/*function tag(accumulate, recentValue) {
	return `${accumulate}<${recentValue}>`;
}*/
/*
function reduce(array, callback, defaultValue) {
	let accumulate = defaultValue;
	
	for (let i = 0; i<array.length; i++) {
		let recentValue = array[i];
		accumulate = callback(accumulate,recentValue);
	}
	return accumulate;
}

const result = reduce(stringArray, tag, "");
console.log(result);//Expected <D><I><S><N><E><Y>< ><W><O><R><L><D>
*/
