import express from "express";
import dbConnect from "./db/index.js";

const app = express();

app.use(express.json());
dbConnect();
app.post("/todo", (req, res) => {

});
app.get("/todos", (req, res) => {

});
app.put("/completed", (req, res) => {
    
});

app.listen(3000);
