import { Router } from "express";

const RegRouter = new Router();

RegRouter.post("/reg", (req, res) => {
  res.json({ message: true });
});

export default RegRouter;
