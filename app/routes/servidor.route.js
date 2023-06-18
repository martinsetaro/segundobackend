import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Desde el servidor");
});

export default router;
