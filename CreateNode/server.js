const http=require('http');
// function rqListener(req,res){

// }
// http.createServer(function(req,res){
    
// });
const server=http.createServer((req,res)=>{
    console.log("Suman Sourav Barik");
});
server.listen(4000,()=>{
    console.log("server running on http://localhost:4000")
});