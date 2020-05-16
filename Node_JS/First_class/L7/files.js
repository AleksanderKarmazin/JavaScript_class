var fs = require ('fs');
var data = fs.readFileSync ('Node_JS/First_class/L7/data.csv','utf-8');

console.log (data);

fs.writeFileSync ('Node_JS/First_class/L7/data_output.csv', 'some data');