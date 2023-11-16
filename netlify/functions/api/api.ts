import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", router);

api.get("/request", (req, res) => {
  const url = req.query.link
  if(!url) return;
  fetch(url).then(response => {
    const html = await response.text()
    res.status(response.status).send(html)
  })
})

export const handler = serverless(api);
