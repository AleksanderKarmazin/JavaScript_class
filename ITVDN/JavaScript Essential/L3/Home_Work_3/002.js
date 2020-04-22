
// Variables creation 

var counter = 0;

while (counter<10) {
    counter++
    document.write ( counter + "<br/>")
    if (counter == 5) {
        break;
    }
}


var counter = 0;

document.write ("<br/>")
document.write ( counter + "<br/>")
document.write ( ++counter + "<br/>")
document.write ( ++counter + "<br/>")
document.write ( counter++ + "<br/>")

do {
    counter++
    document.write ( counter + "<br/>")
    if (counter == 7) {
        break;
    } 

}
    while (counter<20) 
      
    
for (let i = 0; i < 5; i++) { // выведет 0, затем 1, затем 2
        document.write("<h1>Санёк ты дурак!<h1/>" + i + "<br/>");
        document.write("<h6>Санёк ты дурак!<h6/>" + i + "<br/>");
}

document.write("===================================================================================")
document.write("<br/>")
document.write("<br/>")


var count = prompt ("How many itteration do you want? ");
var exit = prompt ("What namber you do not want to see? ");

for (var i =0; i<count; i++) {
    if (i == exit) {
        
        document.write("<br/>")
        continue;
    }
    else  {
        document.write(i + "<br/>")
    }
}