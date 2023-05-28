// // // document.write("hiii");
// // // console.log("hello world", 4 + 6, "another log");
// // // alert("me");
// // // console.warn("hhiiikddmm");
// // // console.error("hwwww");

// // var number1 = 34;
// // var number2 = 34;
// // console.log("sum=",
// //     number1 / number2);
// // var str1 = "tanvi"
// // var num = 67;
// // //objects
// // var marks = {
// //     tavi: 67,
// //     tanvi: 99
// // }
// // console.log(marks);

// // //booleans
// // var a = true;
// // var b = false;
// // console.log(a, b);

// // //undefined or null
// // var und = undefined;
// // console.log(und);

// // var abc;
// // console.log(abc);

// // var n = null;
// // console.log(n);

// // //arrays
// // var array = [2, 3, 'ghhh', 5, 67]

// //operators
// // //arithemetic operators
// // var a = 67;
// // var b = 90;
// // console.log("sum", a + b);
// // console.log("divide", a / b);

// // //assignment operators
// // var c = b;
// // c += b;
// // console.log(c += 2);

// // //comparison operator
// // var x = 8;
// // var y = 9;
// // console.log(x == y);
// // console.log(x < y);

// //logical operators
// // console.log(true || false); //and
// // console.log(true || false); //or
// // console.log(!true) //not

// //DRY PRINCIPLE == donot repeat yourself
// // function avg(a, b) {
// //     c = (a + b) / 2
// //     return c;
// // }
// // c1 = avg(2, 9);
// // console.log(c1);

// //conditionals
// // var age = 30;
// // if (age > 38) {
// //     console.log("not kid")

// // } else if (age > 26) {
// //     console.log(" urururkid")
// // } else {
// //     console.log(" kid")
// // }
// // //forloop
// var array = [1, 2, 3, 4, 6, 7];
// // console.log(array);
// for (i = 0; i <= array.length; i++) {
//     if (i == 2) {
//         //break;
//         continue;
//     }
//     console.log(array[i]);
// }

// // // array.forEach(element => {
// // //     console.log(element);
// // // });
// // // const a = 0; //cannot change the variable to keep it constant
// // // a++;
// let j = 0; //block level scope
// // while (j < array.length) {
// //     console.log(array[j]);
// //     j++;
// // }
// do {
//     console.log(array[j]);
//     j++;
// } while (j < array.length);

// ////////array methods///////
// let array = ['ar', 'true', 12];
// console.log(array);

// console.log(array.length);
// console.log(array.pop());
// array.pop();
// console.log(array);
// array.push('tanvi');
// console.log(array);
// array.shift();
// array.unshift(12);
// console.log(array);

///////string methods in javascript////////

// let str = "tanvi is my name";
// console.log(str.length);
// console.log(str.indexOf("is"));
// console.log(str.lastIndexOf("name"));
// console.log(str.slice(0, 8));
// console.log(str.replace("tanvi", "buubu"));

// //dates

// let Mdate = new Date();
// console.log(Mdate.getTime());
// console.log(Mdate.getFullYear());
// console.log(Mdate.getDay());
// console.log(Mdate.getDate());
// console.log(Mdate.getMinutes());
// console.log(Mdate.getHours());
// console.log(Mdate.getMonth());

// // DOM - DOCUMENT Object MODEL
// let element1 = document.getElementById('click');
// // console.log(element1);
// let element = document.getElementsByClassName('container');
// // console.log(element);
// // element[0].style.background = 'yellow'
// // element[1].classList.add('bg-primary')
// // element[0].classList.remove('text-success')
// // console.log(element[0].innerHTML)
// // console.log(element[0].innerText)
// tn = document.getElementsByTagName('div');
// console.log(tn)
// created = document.createElement('h1');
// created.innerText = "helloooooo"
// tn[0].appendChild(created);
// created1 = document.createElement('b');
// created1.innerText = "sonuuuu"
// tn[0].replaceChild(created1, created);
// removeChild(element);

//selectiong using query
// sel = document.querySelector('#click') //for selecting the css conatiners
// console.log(sel)
// sel1 = document.querySelectorAll('.container') //for selecting the css conatiners
// console.log(sel1)

//events

// function clicked() {
//     console.log('button was clicked')
// }
// window.onload = function() {
//     console.log('bwas clicked')
// }
// let prevhtml = document.querySelectorAll('.container')[1].innerHTML
// firstcontainer.addEventListener('mouseup', function() {
//     document.querySelectorAll('.container')[1].innerHTML = '<b>tanvi'
//     console.log("cmouseupd")
// })

// firstcontainer.addEventListener('mousedown', function() {
//     document.querySelectorAll('.container')[1].innerHTML = '<b>sundartanvi'
//     console.log("clickkkkeddd")
// })

// firstcontainer.addEventListener('click', function() {
//         document.querySelectorAll('.container')[1].innerHTML = '<b>sundartanvi'
//         console.log("clicked")
//     })
// firstcontainer.addEventListener('mouseover', function() {
//     console.log("mouse on")
// })
// firstcontainer.addEventListener('mouseout', function() {
//     console.log("mouse outd")
// })

// firstcontainer.addEventListener('mouseup', function() {
//     console.log("mouse up")
// })
// firstcontainer.addEventListener('mousedown', function() {
//     console.log("mouse down")
// })
//arrow
// function summ(a, b) {
//     return a + b;
// }
// summ = (a, b) => {
//     return a + b;
// };
//settimeout and setinterval
// logkaro = () => {
//     document.querySelectorAll('.container')[1].innerHTML = '<b>hiii'
//     console.log("i m log")
// }
// clr = setTimeout(logkaro, 2000)
//     // clr = setInterval(logkaro, 2000)

//local storage
// localStorage
// Storage  { name: 'tanvi', length: 1 }
// localStorage.getItem
// ƒ getItem() {
//     [native code] }
// localStorage.getItem('name')
// 'tanvi'
// localStorage.setItem('fame', 'harry')
// undefined
// localStorage
// Storage  { name: 'tanvi', fame: 'harry', length: 2 }
// localStorage.removeItem('name')
// undefined
// localStorage
// Storage {fame: 'harry', length: 1}
// localStorage.clear
// ƒ clear() { [native code] }
// localStorage.clear()
// undefined
// localStorage
// Storage {length: 0}

// JSON
// obj = { name: 'tanvi', length: 1, a: { this: 'that' } }
// js = JSON.stringify(obj);
// console.log(js)
// parsed = JSON.parse(`{"name":"tanvi","length":1,"a":{"this":"that"}}`)
// console.log(parsed)

//template literals- backticks
a = 34;
b = 90;
console.log(`this is my ${a},${b}`)