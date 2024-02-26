const express = require("express");

const app = express();

const cors = require("cors");

const ProjectModel = require("./models/schema"); 

require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(require("./routes/record"));
app.use(require("./routes/auth/register"));
app.use(require("./routes/auth/login"));

// Get MongoDB driver connection
const dbo = require("./db/conn");
 
app.get('/', async (req, res) => {
  const user = await ProjectModel.find({});
  res.send(user);
});

app.listen(port, () => {
  // Perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});