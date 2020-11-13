var http = require('http');
const StringBuilder = require("string-builder");
const prompt = require('prompt-sync')();
var empty = require('is-empty');

let sb = new StringBuilder();
//commented - Web response
//http.createServer(function(req,res){
     //   res.writeHead(200,{'Content-Type':'text/plain'});   
        var arr = prompt("Enter your inputs comma seperated ").split(",");        
        var i;   
        var displyMsg;     
        for(i=0;i<arr.length;i++)
        {
           displyMsg = ProcessInputs(arr[i]) 
           sb.appendLine(displyMsg);          
        } 
        console.log(sb.toString());
        //res.end(sb.toString());
//}).listen(8080);

function ProcessInputs(value)
{        
        var msg = '';
        if(isNaN(value) || empty((value+msg).trim())){
                msg = 'Invalid Item';     
        }
        else
        {
                switch(0)
                {                                
                        case value % 15:   
                                msg = 'FizzBuzz';
                                break; 
                        case value % 3:   
                                msg = 'Fizz';   
                                break; 
                        case value % 5:   
                                msg = 'Buzz';   
                                break; 
                        default:
                                msg = 'Divided ' + value + ' by 3';  
                                msg += '\n';
                                msg += 'Divided ' + value + ' by 5';              
                }             
        }        
        return msg;
}

