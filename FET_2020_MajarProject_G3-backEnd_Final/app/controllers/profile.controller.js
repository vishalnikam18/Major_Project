const db = require("../models");

const { status } = require("../models");
const Status = db.status;
const { score } = require("../models");
const Score = db.score;
//Find All complete quizes of user by userId
exports.findAll = (req, res) => {
    const user_Id = req.params.id;
  
    return Score.findAll({
      include: ["quizes"],
      where: { userId: user_Id }
    }).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  
  
//Find incomplete quize of user by userId
exports.findAllIncomplete = (req, res) => {
    const user_Id = req.params.id;
  console.log(user_Id);
    return Status.findAll({
      include: ["quizst"],
      attributes: ['quizeId'],
      group: ['quizeId'],
      
      where: { userId: user_Id }
    }).then(data => {
      res.send(data);
    })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  