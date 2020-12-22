module.exports = (app) => {
    const profile = require("../controllers/profile.controller.js");
  
    var router = require("express").Router();
  

 //Retrieve all complete quizes
 router.get("/:id", profile.findAll);

 // Retrieve all incomplete quizes
 router.get("/status/:id", profile.findAllIncomplete);
  
 app.use("/api/profile", router);
};