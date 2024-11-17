const http=require('http');
// function rqListener(req,res){

// }
// http.createServer(function(req,res){
    
// });
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    const url=req.url;
    if(url==='/home'){
        res.write('Welcome home');
    }
    if(url==='/about'){
        res.write('Welcome to About Us page');
    }
    if(url==='/node'){
        res.write('Welcome my Node js project');
    }
    res.end();
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>Wellcome to my Node js project</h1></body>');
    // res.write('</html>');
    // res.end();
});
server.listen(4000);