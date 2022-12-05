import { Router } from "express";

const AuthRouter = new Router();

AuthRouter.post("/auth", (req, res) => {
  res.json({ message: true });
});

export default AuthRouter;
