
let username = prompt("Enter your name");
if ( username == "Name"){
    let userpassword = prompt("Enter your password");
     if(userpassword == "Логос"){
        alert("Ласкаво просимо!");
    } else if(userpassword == null){
        alert("Вхід скасований");
    } else if(userpassword !== "Логос");{
        alert("Пароль не вірний");
    }
}

 else if ( username == null){
    alert("Вхід скасований");
 }else if(username !== "Name"){
    alert("Я вас не знаю");
}