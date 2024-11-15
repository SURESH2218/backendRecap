import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sureshalabani2785:Suresh%4022@cluster0.sghfo.mongodb.net/todo_app?retryWrites=true&w=majority"
    );
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};

const todoSchema = mongoose.Schema({
  title: "String",
  description: "String",
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

export default todo;
