module.exports = app => {
    const chart = require("../controllers/chart.controller");
  
    var router = require("express").Router();
  
  
    //Chart Route
    router.get("/", chart.findAll);
    router.put("/", chart.updateCount);
    
   
    app.use('/api/chart', router);
  };