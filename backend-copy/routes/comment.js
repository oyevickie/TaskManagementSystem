const task = require("../models/task");


module.exports.userChatUpdate = (req, res) => {

    task.find({ _id: req.params.id }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
          
          
        task.updateOne(
          { _id: req.params.id },
          {
            $push: {
                comment: { date: Date(), comment: req.body.comment, email: req.params.email }
            }
          },
          (err, data) => {
            if (err) {
              res.send(err);
            } else {
              res.send(data);
            }
          }
        );
      }
    });
  };



  module.exports.getcomment = (req,res) => {

    console.log(req.params.id);
    
    
      task.findOne({_id:req.params.id}, {comment:1, _id: 0} ,(err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data.comment);
        }
      });
      
  }