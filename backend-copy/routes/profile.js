
const TaskSchema = require("../models/task")
 
module.exports.TaskModel = (req, res) => {

    TaskSchema.find({ email: req.params.email }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  };
  

  