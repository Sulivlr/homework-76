import express from "express";

const messagesRouter = express.Router();

messagesRouter.get("/", (req, res) => {
   return res.send('SomeThing');
});

messagesRouter.post("/", (req, res) => {
    return res.send('SomeThing post');
})

export default messagesRouter;