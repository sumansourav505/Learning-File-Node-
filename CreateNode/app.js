const http=require('http');
const routes=require('./routes');
const server=http.createServer(routes.handler);
console.log(routes.someText);
server.listen(4000,()=>{
    console.log(`server is running locallhost ${4000}`);
});