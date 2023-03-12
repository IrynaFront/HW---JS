let a = +prompt ("Enter the month number from 1 to 12","");

switch (a){
    case 1:
    case 2:
    case 12:
        alert('winter');
            break;
    case 3:
    case 4:
    case 5:
        alert('spring');
            break;
    case 6:
    case 7:
    case 8:
        alert('summer');
            break;
    case 9:
    case 10:
    case 11:
        alert('outumn');
            break; 
    default:
        alert('Invalid number');
}

// 2. function declaration
// - Створити функцію яка буде приймати одне число.
// - В середині функції перевіряємо чи це число є простим.
// - Після перевірки виводимо повідомлення в console.log().

let x = prompt('Enter a number');

function primeNumber ( number ){
   if( x % 2 == 0 && x != 2 ){
    console.log(`The number ${ number} is not prime`);
   } else  if( x % 3 == 0 && x != 3 ){
    console.log(`The number ${ number} is not prime`);
   } else  if( x % 5 == 0 && x != 5 ){
    console.log(`The number ${ number} is not prime`);
   } else  if( x % 7 == 0 && x != 7 ){
    console.log(`The number ${ number} is not prime`);
   } else {
    console.log(`The number ${ number} is prime` );
   }
}
primeNumber( x);



/*
Написати розв’язок нижче описаного завдання за допомогою function declaration:
1.	Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
2.	Кількість параметрів у функції може бути від 2х і більше.
3.	Забороняється використовувати Math.max().
Приклад роботи:
1.	max(5,-2) – має повернути 5.
2.	max(5,-2, 30, 6) – має повернути 30
*/


let i = 10;
function max ( ){
    for(let e = 0; e < arguments.length; e++) {
        console.log(arguments[e]);
    }
}

max (5, -2, 30, 6);



