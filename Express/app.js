const express=require('express');
const app=express();
const port=3000;

// app.get("/",(req,res)=>{
//   res.send("Arun");  
// })

// app.get("/about",(req,res)=>{
//   res.send("FSD Class");  
// })

// app.get("/image",(req,res)=>{
//   res.send(`<img src='https://imgs.search.brave.com/m3kwXP1IgiDq8AsDalZvOvnMtJ6WXxBCnTL4X8Uv3s8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWJlcy5hYy5pbi9h/c3NldHMvSG9tZVBh/Z2UvMiUyMEFib3V0/JTIwQUJFUy5qcGc'></img>`);  
// })/

const students=[
  {
    id:1,
    name:"Arun",
    class:"CSE"
  },
   {
    id:2,
    name:"Aryan",
    class:"CSE-D"
  }
]
app.get('/read',(req,res)=>{
  try{
    res.status(200).json({message:"Show all data",data:students});

  }
  catch (err){
    res.status(500).json({message:"student data not found",error:err.message})
  }

  
})


app.get('/read/:id',(req,res)=>{
  try{

    const id=req.params.id;
    const student=students.find(s=>s.id==id);
    if(!student){
      return res.status(404).json({message:"students data not found"});
    }

   res.status(200).json({message:"student data found", data: student});   

  }
   catch (err){
    res.status(500).json({message:"student data not found",error:err.message})
  }
})







app.listen(port,()=>console.log("Server Started"))


