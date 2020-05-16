var fs = require ('fs');
/*var data = fs.readFileSync ('Node_JS/First_class/L7/data.csv','utf-8');

console.log (data);

fs.writeFileSync ('Node_JS/First_class/L7/data_output.csv', 'some data');
*/

fs.readFile('Node_JS/First_class/L7/data.csv','utf-8', function(err, data){
    console.info(err);
    console.info (data);

} );
