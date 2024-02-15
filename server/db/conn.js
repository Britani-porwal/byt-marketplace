const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://britaniporwal:deqode%40123@cluster0.efyuluc.mongodb.net/bytDB?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});



