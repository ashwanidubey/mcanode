let works=[];
const add=(req,res)=>{
    let work=req.query.work
    works.push(work)
    res.send(works)  
}
const search=(req,res)=>{
    let work=req.query.work
    let tempdata=works.filter(data=> data==work)
    res.send(tempdata)  
}
const deletetask=(req,res)=>{
    let work=req.query.work
    let tempdata=works.filter(data=> data!=work)
    if(tempdata.length==works.length) 
    {
        res.send("data not found") 
    } 
    else
    {
        works=tempdata;
        res.send(works)
    }  
}
const findAll=(req,res)=>{
    res.send(works) 
}
module.exports={add,search,deletetask,findAll}