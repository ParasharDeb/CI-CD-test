import { prisma } from "@repo/db";
import express from "express";
const app = express();
app.use(express.json());
app.post("/signin", async (req, res) => {
  const email = req.body.email;
  const name = req.body.name;
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },








    
  });
  res.json({
    id: user.id,
  });
});
app.listen(3030);
