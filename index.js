const express=require('express');
const port=5050;
const app=express();
const {add,search,deletetask,findAll}=require('./task')
app.get('/add',add)
app.get('/search',search)
app.get('/deletetask',deletetask)
app.get('/findAll',findAll)
app.listen(port,()=>{
    console.log("app started at port "+port)
});
