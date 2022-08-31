const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

const infos = [
  {
    name : "hoggyy",
    age : 28,
  },
  {
    name : "wing-eun",
    age : 20,
  },
  {
    name : "dady",
    age : 59,
  },
  {
    name : "momy",
    age : 56,
  },

]

app.get("/api/infos/:id", (req, res) => {
  const id =  Number(req.params.id);
  return res.json(infos[id]);
})

app.get("/api/infos/names", (req, res) => {
    const names = infos.map((info) => info.name);
    return res.json(names);
});

app.get("/api/infos/ages", (req, res) => {
  const ages = infos.map((info) => info.age);
  return res.json(ages);
});


app.listen(PORT, () => console.log(`this server listening on ${PORT}`));