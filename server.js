const express = require("express");
const cors = require("cors");

const app = express();
const port = 2020

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.send("Welcome");
//   console.log("Welcome")
});

app.post('/', (req, res) => {
    res.send('Welcome home!')
  })
  require("./routes/tutorial.routes.js")(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
