const express=require('express');
const port=5050;
const app=express();
const {bye,json,downRes,getHtFile}=require('./functions/demo')
let isLogin=false;
const checkLogin=(req,res,next)=>{
    if(isLogin){
        next();
    }
    else{
        res.send({"status":"user is not logged in"})
    }
}
//app.use(checkLogin)
app.get('/login',(req,res)=>{
    isLogin=true;
    res.json({"status":"logged in success"})
})
app.get('/bye',checkLogin,bye);
app.get('/json',checkLogin,json);
app.get('/downloadResume',checkLogin,downRes);
app.get('/getHtmlFile',checkLogin,getHtFile);

app.listen(5050,()=>{
    console.log("app started at port "+port)
});
