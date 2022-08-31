const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

app.get("/api/info/:id", (req, res) => {
  const id = req.params.id;
  if(id == "1"){
    return res.json({
      name : "hoggyy",
      job: "student",
    });
  }
  if(id == "2"){
    return res.json({
      name : "babo",
      job : "clown",
    })
    
  }
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));