
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

var confermation_var = prompt("Санёк, ты дурачёк ?", "0 or 1");



if (confermation_var > 0)
    {
        for (let i = 0; i < 5; i++) { // выведет 0, затем 1, затем 2
            document.write("<h1>Санёк ты дурак!<h1/>" + i + "<br/>");
            document.write("<h6>Санёк ты дурак!<h6/>" + i + "<br/>");
            document.write("<img src='123.jpg' />" + "<br/>");
          }
    }
else {

    document.write( "No, I am not fool");
}


// В заголовке страницы

// <meta name="http-equiv" content="Content-type: text/html; charset=UTF-8">
// При объявлении скрипта

// <script src="" charset="utf-8"></script>
// В .htaccess

// AddCharset utf-8 .js
// Вместо utf8 устанавливайте свою кодировку.