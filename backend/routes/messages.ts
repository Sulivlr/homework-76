import express from "express";
import {MessageMutation} from '../types';
import fileDb from '../fileDb';

const messagesRouter = express.Router();

messagesRouter.get("/", async (req, res) => {
  const queryDate = req.query.datetime as string;

  if (queryDate) {
    const date = new Date(queryDate);
    if (!isNaN(date.getDate())) {
      const messages = await fileDb.getMessages(queryDate);
      return res.send(messages);
    } else {
      return res.send({error: "Invalid date"});
    }
  }
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
})

export default messagesRouter;