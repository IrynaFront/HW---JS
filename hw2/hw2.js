let mark = 0;

let question1 = prompt("відгадайте так чи ні?");
let question2 = prompt("В Україні будують житло з конопель.");
let question3 = prompt("В Україні є завод, який займається виготовленням крові.");
let question4 = prompt("Україна - єдиний експортер кукурудзи до Єгипту.");
let question5 = prompt("Українські фермери вирощують трюфелі.");
let question6 = prompt("На Київщині колорадських жуків шукають дрони.");
let question7 = prompt("В Україні створили мобільний додаток, який показує користувачеві, що людина поруч з ним не повертає гроші.");
let question8 = prompt("На Західній Україні є ферма, де розводять колібрі.");
let question9 = prompt("В Україні є лижна фабрика, яка покриває 40% європейського ринку.");
let question10 = prompt("В Україні є найбільший у світі притулок для свійських тварин.");

if ( question1 == "так") {
    mark = mark + 1;
    console.log( "так, вітаю !");
} else if(question1 == "ні" ) {
    mark = mark;
    console.log( "не правда");
}

if ( question2 == "так") {
    mark = mark + 1;
    console.log( "так, вітаю !");
} else if(question2 == "ні" ) {
    mark = mark;
    console.log( "не правда");
}

if ( question3 == "так") {
    mark = mark + 1;
    console.log( "так, вітаю !");
} else if(question3 == "ні" ) {
    mark = mark;
    console.log( "не правда");
}

if ( question4 == "так") {
    mark = mark + 1;
    console.log( "так, вітаю !");
} else if(question4 == "ні" ) {
    mark = mark;
    console.log( "не правда");
}

if ( question5 == "так") {
    mark = mark + 1;
    console.log( "так, вітаю !");
} else if(question5 == "ні" ) {
    mark = mark;
    console.log( "не правда");
}

if ( question6 == "так") {
    mark = mark + 1;
    console.log( "так, вітаю !");
} else if(question6 == "ні" ) {
    mark = mark;
    console.log( "не правда");
}

if ( question7 == "так") {
    mark = mark ;
    console.log( "так, вітаю !");
} else if(question7 == "ні" ) {
    mark = mark +1;
    console.log( "не правда");
}

if ( question8 == "так") {
    mark = mark;
    console.log( "так, вітаю !");
} else if(question8 == "ні" ) {
    mark = mark + 1;
    console.log( "не правда");
}

if ( question9 == "так") {
    mark = mark + 1;
    console.log( "так, вітаю !");
} else if(question9 == "ні" ) {
    mark = mark;
    console.log( "не правда");
}

if ( question10 == "так") {
    mark = mark + 1;
    console.log( "так, вітаю !");
} else if(question10 == "ні" ) {
    mark = mark;
    console.log( "не правда ");
}
console.log("result", mark);

let result = +prompt( " Ваш результат ", mark);