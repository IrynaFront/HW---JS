//let n = prompt("Enter  number");
//let n = 4;
//for( x = 1; x <= n; x +=){
 //console.log(x);
 //f = x * (n-1);

 //console.log(f)
//}

//for(let i= 0; i <= 10; i++){
  //console.log(i);
//}

//function sumFactorials(start, finish, step) {
   // let sum = 0;
  
    // перебираем числа
   // for (let i = start; i <= finish; i += step) {
        
        // считаем факториалы
      //  let factorial = 1;
        
       // for (let j = 2; j <= i; j++) {
           // factorial *= j;             
        //}
  
        // считаем сумму
        //sum += factorial;
       
     //}
  
     //return sum;
   // }
  
  //sumFactorials(1, 5, 3);
  


  
  
  
  
  
  
  
  //do {
   //n++;
    // console.log (n * (n-1));
     
  //} while ( n >= 1);
  
  

 
//let m = prompt("Enter the number");
//let n = prompt("Enter the power of a number");

//let result = 1;
  // if (n < 0){
    //c = -n;
   //}
 //for( let i = 0; i < n ; i++){
   //  if(n < 0){ 
                               // 2^-2 =1/ (2*2)
     //   { result  /= m ; }
   
 //console.log(result);
//}
 //} 
 
 


 // 8. Написати програму що обчислює піднесення до степеня.
       // В 1й промпт вводиться число,а в 2й промпт степінь. 
       //Умови: Степінь може бути додатня, від'ємна або 0. 
       //Обрахувати всі можливі варіанти циклом for.
       // Задачу бажано виконати використовуючи 1 цикл! 

       //a^b = a*a b раз;
       //a^-b= 1/a^b;
       //a^0 = 1;

//let m = prompt("Enter the number");
//let n = prompt("Enter the power of a number");

//let result = 1;

 //for( let i = 0; i <n ; i++){
   // if( n >= 0){
      // {result *= m ;}  
  
 //console.log(result);
//}
// }
 
//let a = prompt("Enter the number");
//let result = 1;
//for (i = 1; i <= a; i++){
    // {result = result * i;}
//console.log(result);

//}



 //let a = prompt('Введи число')
//let c = prompt('Введи степінь')
//let f
 
 
 
//for (let i = 0; i < 1; i++) {
  //  f = a ** c
 
  //  document.write('Відповідь:' + f);
//}


//function power(n, pow) {
  //  let minus;
    //if (pow < 0) minus = true;

    //let mul = 1;
    //let p = minus ? -pow : pow;
    //for (let i = 1; i <= p; i++) {
      //  mul *= n;
    //}
   // return minus ? 1 / mul : mul;
//}

//console.log(power(20, 0));
//console.log(power(20, 3));
//console.log(power(10, -3));

//let n = +prompt("Число:");
//let pow = +prompt("Степень:");
//alert(power(n, pow));