var http=require('http');

var fs = require('fs');

var server=http.createServer(function(req,res){

   if(req.url=="/"){
        res.writeHead(200, {'Contact-Type':'text/html'})
        res.write('<h1>You are in HOME page</h1>')
        res.end();
    }
    else if(req.url=="/about"){
        res.writeHead(200, {'Contact-Type':'text/html'})
        res.write('<h1>You are in About page</h1>')
        res.end();
    }
    else if(req.url=="/contact"){
        res.writeHead(200, {'Contact-Type':'text/html'})
        res.write('<h1>You are in Contact page</h1>')
        res.end();
    }
    else if(req.url=="/file-write"){
        fs.writeFile('demo.txt', 'hello world', function (err) {
            if (err) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Write Failed');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Write Successful');
                res.end();
            }
        });
       

    }
    else{
         res.end("Error 404");
    }


})

server.listen(3000,()=>{
    console.log("Server Run Successfully");
});


