const express=require('express');
const app=express();
const port=3005;



const cars=[
  {
    id:1,
    Car_name:"XUV300",
    Car_price:200000
  },
   {
    id:2,
    Car_name:"XUV300",
    Car_price:200000
  },
  {
    id:3,
    Car_name:"XUV300",
    Car_price:200000
  },
  {
    id:4,
    Car_name:"XUV300",
    Car_price:200000
  },
  {
    id:5,
    Car_name:"XUV300",
    Car_price:200000
  },
]

app.get("/cars", (req, res) => {
  res.json(cars);
});

app.get("/cars/:id", (req, res) => {
  const car = cars.find(s => s.id == req.params.id);
  if (!car) return res.status(404).send("Not found");
  res.json(car);
});

app.post("/cars", (req, res) => {
  const newStudent = {
    id: cars.length + 1,
    Car_name: req.body.Car_name,
    Car_price: req.body.Car_price
  };

  cars.push(newCar);
  res.status(201).json(newCar);
});

app.delete("/cars/:id", (req, res) => {
  const index = cars.findIndex(s => s.id == req.params.id);
  if (index === -1) return res.status(404).send("Not found");

  const deleted = cars.splice(index, 1);
  res.json(deleted);
});


app.listen(port,()=>console.log("Server Started"));