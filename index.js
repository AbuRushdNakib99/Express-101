const express=require('express')

const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>This is a Express js File</h1>")
})

app.listen(4000,()=>{
    console.log("Server is listening");
})