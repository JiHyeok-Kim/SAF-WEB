const express = require("express");

const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({
    test: "OK",
  });
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
