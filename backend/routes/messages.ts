import express from "express";
import {MessageMutation} from '../types';
import fileDb from '../fileDb';

const messagesRouter = express.Router();

messagesRouter.get("/", (req, res) => {
   return res.send('SomeThing');
});

messagesRouter.post("/",  async (req, res) => {
    if (!req.body.message || !req.body.author) {
      return res.status(400).send({error: "Author and message must be present in the request"});
    }

    const messageData: MessageMutation = {
      message: req.body.message,
      author: req.body.author,
    };

    const message = await fileDb.addMessages(messageData);

    res.send(message);

    return res.send('SomeThing post');
})

export default messagesRouter;