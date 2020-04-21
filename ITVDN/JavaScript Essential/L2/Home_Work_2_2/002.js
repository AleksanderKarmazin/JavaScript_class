
// Variables creation 
// var a=10;
// var b="Some sting";
// var c= true;



//alert 
// alert(a)
// alert(b)
// alert(c)
// alert("DONE")

// prompt
// var d = prompt("Текст призыва", "Чернобелая подсказка")
// alert(d)

var confermation_var = prompt("Санёк, ты дурачёк ?", "Yes or no");


switch (confermation_var) {

    case "Yes":
        {
            alert ("FOOL!")
        };
        break;

    case "no": 
        {
            alert("You are not fool")
        };
        break;
    default:
        {
            alert("defult")
        }

};


var msg = (confermation_var == "Yes") ? "FOOL!- and it`s from ternarniy operator" : "You are not fool - and it`s from ternarniy operator";

alert(msg)





// В заголовке страницы

// <meta name="http-equiv" content="Content-type: text/html; charset=UTF-8">
// При объявлении скрипта

// <script src="" charset="utf-8"></script>
// В .htaccess

// AddCharset utf-8 .js
// Вместо utf8 устанавливайте свою кодировку.