/*
api.domain/?{parameter}
assuming name of the parameter is number and the path is /
*/

const http = require('http');
const url = require('url');
//using the HTTP and url modules to keep things simple

const generateString = require('./generateString.js');
//created generateString module to keep code clean- seperation of concerns


const server = http.createServer((req,res)=>{

    const urlObj = url.parse(req.url,true);
    //parsing the url as object

    if(urlObj.pathname==="/"){
    //checking if the pathname is /

        const number = urlObj.query.number*1;
        //extracting number from the url parameter
        
        if(number<10&&number>=0){
        //checking if the length is 1 and the parameter in question is actually a number

            res.writeHead(200);
            //response code: OK

            res.end(generateString(number));
            //send user the string of the required length
        }else{
            res.writeHead(400);
            //response code: Bad Request

            res.end("error");   
        }
    
    }else{
        res.writeHead(400);
        res.end("error");
    }

});

server.listen(80,()=>{
    console.log("server started");
});
