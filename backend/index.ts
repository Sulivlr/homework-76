import express from "express";
import cors from 'cors';
import messagesRouter from "./routes/messages";
import fileDb from './fileDb';


const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/messages', messagesRouter);


const run = async () => {
  await fileDb.init();
  app.listen(port, () => {
    console.log('Server running on port', port);
  });
};

void run();



