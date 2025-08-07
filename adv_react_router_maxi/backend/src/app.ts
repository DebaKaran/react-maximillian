import bodyParser from "body-parser";
import express, { Request, Response, NextFunction } from "express";

import eventRoutes from "./routes/events";

const app = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/events", eventRoutes);

// Error-handling middleware (must have 4 parameters)
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message });
});

export default app;
