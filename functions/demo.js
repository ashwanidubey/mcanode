const path=require('path')
let db=[  {'name':'Ashwani','age':27},
          {'name':'Rahul','age':36},
          {'name':'Piyush','age':21}
       ]
const bye=(req,res)=>{
    console.log("ok bye")
    res.send("trail");
}
const json=(req,res)=>{
    console.log(req.query)
    let name=req.query.name;
    let jsonobj=db.filter(data=>data.name==name)
    res.json(jsonobj);
}
const downRes=(req,res)=>{
    res.download('AshwaniDubeyResume.pdf');
}
const getHtFile=(req,res)=>{
    //=> Users/ashwanidubey/Desktop/mcanode/demo.html
    res.sendFile(path.join(__dirname, 'demo.html'));
}
module.exports={bye,json,downRes,getHtFile}