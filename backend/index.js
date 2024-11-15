import express from "express";
import { createTodo } from "./types.js";
import todo, { dbConnect } from "./db/index.js";
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "todo created",
  });
});

app.get("/", (req, res) => {
  req.send("server running");
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  //   console.log(todos);
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "updated successfully",
  });
});

dbConnect();
app.listen(3001);
