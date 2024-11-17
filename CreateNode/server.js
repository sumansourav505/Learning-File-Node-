const http=require('http');//import the http module
// function rqListener(req,res){

// }
// http.createServer(function(req,res){
    
// });
const server=http.createServer((req,res)=>{// create server & perform response operation to client according to request
    res.setHeader('Content-Type','text/plain');
    const url=req.url;
    if(url==='/home'){
        res.write('Welcome home page');
    }
    if(url==='/about'){
        res.write('Welcome to About Us page');
    }
    if(url==='/node'){
        res.write('Welcome my Node js project');
    }
    res.end();
});
server.listen(4000);