const express = require("express");
const app = express(); 
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
app.use(cors()); 


const userRouter = require("./routers/userRoutes"); 
const noteRouter = require("./routers/noteRoutes");


const mongoose = require("mongoose");




//routers:
app.use(express.json()); 
app.use("/users", userRouter);
app.use("/note", noteRouter);

//defining http methods
app.get("/", (req, res) => {
    res.send("Notes API");
});


//PORT
const PORT = process.env.PORT || 5000;

//setup mongodb

//connecting to mongodb:
mongoose.connect(process.env.MONGO_URL)
.then(() => { //callback function on success
    //start our app:
    //defining port for http request
    app.listen(PORT, ()=>{
    console.log("Server started on port no. " + PORT);
    });


})
.catch((error) => { //callback function on error
    console.log(error);
})




