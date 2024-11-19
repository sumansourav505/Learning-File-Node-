// const http=require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("middle ware");
    next();//allow to continue to execute another middleware
})
app.use((req,res,next)=>{
    console.log("Another middle ware");
    res.send("<h1>Hello from Express</h1>")
})
// const server=http.createServer(app);
// server.listen(4000,()=>{
//     console.log(`server is running locallhost ${4000}`);
// });
app.listen(4000,()=>{
    console.log("server running on 4000");
});