import express, { Application, Request, Response } from "express";
import morgan from "morgan";


const app: Application = express();
const PORT = 8080;
app.use(morgan("dev"))
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello There",
  });
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})