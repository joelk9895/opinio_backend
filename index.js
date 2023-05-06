const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;
const cors = require("cors");

const BetaUsersList = require("./models/betauserslist");

app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://joelk9895:togter-6vemny-suhvYs@opinio.qkbdnis.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
app.post("/insert", async (req, res) => {
  const users = new BetaUsersList({
    name: req.body.firstname,
    email: req.body.email,
  });

  try {
    await users.save();
    res.send("User added successfully" + req.body.firstname);
    console.log("User added successfully" + req.body.firstname);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
