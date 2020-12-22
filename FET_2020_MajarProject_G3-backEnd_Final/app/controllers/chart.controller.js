const db = require("../models");
const Quize = db.quize;

// Retrieve all Quizes from the database.
exports.findAll = (req, res) => {
   
  
    Quize.findAll(
      {
        order:[['count','DESC']],
        limit:5
      }
    )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving quizes."
        });
      });
};

// Retrieve all Quizes from the database.
exports.updateCount = (req, res) => {
   const id=req.body.id;
  joinquery = db.sequelize
  .query(
    "update quizes set count=count+1"+     
      " where id="+
      id ,
    {}
  ).then(data => {
    console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving quizes."
      });
    });
};



