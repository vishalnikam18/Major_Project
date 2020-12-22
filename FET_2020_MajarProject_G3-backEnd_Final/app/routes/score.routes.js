module.exports = (app) => {
  const scr = require("../controllers/score.controller");

  var router = require("express").Router();

  //Route to get the max scorer
  router.get("/:id", scr.getMaxScore);

  //Route to save score
  router.post("/", scr.setScore);

    //Route to get scorer of the day
    router.get("/", scr.findAllScore);

    //users of the day
    router.get("/usersoftheDay/users", scr.findAllUsers);


  app.use("/api/sc", router);
};
