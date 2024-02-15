const express = require("express");

const app = express();

const cors = require("cors");

const userModel = require("./schema"); 

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(require("./routes/record"));

// Get MongoDB driver connection
const dbo = require("./db/conn");
 
app.get('/', async (req, res) => {
  const user = await userModel.find({});
  res.send(user);
  // console.log("users",user)
});

app.listen(port, () => {
  // Perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});