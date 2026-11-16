import express from "express";
import userRouter from "./modules/users/user.routes.js";
import messageRouter from "./modules/messages/message.routes.js";

const app = express();

app.use(express.json());

// Main route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Saraha App"
    });
});

// Users routes
app.use("/users", userRouter);

// Messages routes
app.use("/messages", messageRouter);

export default app;
