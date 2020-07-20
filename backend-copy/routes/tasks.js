

const Tasks = require("../models/task")
const path = require("path")

// image Upload





// create a task

module.exports.create = async (req,res) =>{
    const today = new Date()

    console.log(req.file );
    try {
      let task = await Tasks.create({
        project: req.body.project,
        task_name: req.body.task_name,
        email: req.body.email,
        Details : req.body.Details,
        date : req.body.date,
        productImage: req.file
      }) ;
        res.json(task);          
      }
      catch(e) {
          console.log("error in post of task", e.message, e.toString());
          res.json({ message: "error", error: e.message }) 
      }
    }

// Update a task

module.exports.update = async (req,res) =>{

    try {
        let task = await Tasks.findOneAndUpdate((req.params.id), {
            
        project: req.body.project,
        task_name: req.body.task_name,
        email: req.body.email,
        Details : req.body.Details
        }, { upsert: false, new: true });
        res.json(task)
    }
    catch (e) {
        console.log("error in put of task", e.message, e.toString());
        res.json({ message: "error", error: e.message }) 
    }


}

// get task

module.exports.get =  async (req,res) =>{
  try{
    
    let tasks = await Tasks.find();
    res.json(tasks)
  }
  catch (e) {
      console.log("error in get of task", e.message, e.toString());
      res.json({ message: "error", error: e.message }) 
  }
    
  }



  // get by one



  module.exports.getone = async (req,res) =>{

    try {
        let task = await Tasks.findById((req.params.id))
        res.json(task)
    }
    catch (e) {
        console.log("error in put of task", e.message, e.toString());
        res.json({ message: "error", error: e.message }) 
    }


}



  // delete
  
  module.exports.deleteTask= async (req, res)=> {
      try {
        
        let task = await Tasks.findByIdAndRemove(req.params.id);
        res.json({
          status: task.email + ' Deleted'
        })
      }
      catch (e) {
          console.log("error in delete of task", e.message, e.toString());
          res.json({ message: "error", error: e.message }) 
      }
        
  }

  // find pending on click
  
  module.exports.Pending = (req, res) => {

    // emaile = req.params.email;
  
    Tasks.find({status: "pending" }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  };


  
  
  // find complete on click
  
  module.exports.completee = (req, res) => {
  
    Tasks.find({status: "complete" }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
        console.log(data);
        
      }
    });
  };


// find pending with email

  module.exports.userTasksPending = (req, res) => {

  
    Tasks.find({ email: req.params.email, status: "pending" }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
        console.log(data);
        
      }
    });
  };

  module.exports.completetask = (req, res) => {

  
    Tasks.find({ email: req.params.email, status: "complete" }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
        console.log(data);
        
      }
    });
  };


module.exports.updatestatus = async (req,res) =>{

    try {
        let task = await Tasks.findOneAndUpdate((req.params.id), {
        status: req.body.status
        }, { upsert: false, new: true });
        res.json(task)
    }
    catch (e) {
        console.log("error in put of task", e.message, e.toString());
        res.json({ message: "error", error: e.message }) 
    }


}



  // find tasks threw Email
  
  module.exports.findd = (req, res) => {

  
    Tasks.find({email: req.body.email}, (err, data) => {
      if (err) {
        res.send(err + "user not found");
      } else {
        res.send(data);
        console.log(data);
        
      }
    });
  };


  // Image Uplaod
  