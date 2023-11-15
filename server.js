
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  res.send("Aktif")
})
         

app.get('/request', async (req, res) => {
const url = req.query.link;
if(!url) return;
  try {
    const response = await fetch(url);
    
    // Diğer rota

const html = await response.text()
    // API yanıtını kontrol etme
    if (response.status === 200) {
      res.status(response.status).send(html);
    } else {
      res.status(response.status).send(html);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
