import express, { Request, Response } from 'express'
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello devs!");
});

export default app;
