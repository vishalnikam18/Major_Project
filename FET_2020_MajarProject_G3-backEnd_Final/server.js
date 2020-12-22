const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const db = require("./app/models");
db.sequelize.sync();

//setting up route
require("./app/routes/user.routes")(app);
require("./app/routes/category.routes")(app);
require("./app/routes/quize.routes")(app);
require("./app/routes/search.routes")(app);
require("./app/routes/questions.routes")(app);
require("./app/routes/fav.routes")(app);
require("./app/routes/status.routes")(app);
require("./app/routes/score.routes")(app);
require("./app/routes/chart.routes")(app);
require("./app/routes/timer.routes")(app);
require("./app/routes/maiulsender.route")(app);
require("./app/routes/profile.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
