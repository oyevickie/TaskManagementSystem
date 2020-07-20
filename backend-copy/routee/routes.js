const router = require("express").Router(); 


// const express = require("express");
// const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    // cb(null, new Date().toISOString() + file.originalname);
    cb(null, new Date().toISOString().replace(/[\/\\:]/g, "_") + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});



//Require Express Router

const profile = require("../routes/profile")
const sign = require("../routes/Users");
const task = require("../routes/tasks");
const contact = require("../routes/contact");
const coemment = require("../routes/comment")
const {check} = require("express-validator")



const auth = require("../routes/auth")


router.post("/register",sign.register)

router.post("/login",sign.login)

router.get("/user",sign.gett)

router.get("/alluser",sign.get)

router.delete("/deleteUser/:id",sign.deleteUser)

router.get("/auth",auth)

router.get("/tasklist/:email", profile.TaskModel, auth)

router.put("/updateuser/:id",sign.updateUser)

router.put ("/updatepass/:id", sign.password)

router.get("/getoneuser/:id", sign.getone, auth)


// tasks

router.post("/createtask",upload.single('productImage'),task.create)

router.get("/alltask",task.get)

router.put("/updatetask/:id",task.update)

router.delete("/deletetask/:id",task.deleteTask)

router.get("/getone/:id",task.getone)

router.get("/userpending/:email", task.userTasksPending)

router.get("/usercomplete/:email", task.completetask)

router.get("/pendingtask",task.Pending)

router.get("/completetask",task.completee)

router.put("/updatestatus/:id",task.updatestatus)

router.post("/contact",contact.contact)

router.post("/usertask",task.findd)

router.put("/comment/:id/:email",coemment.userChatUpdate)

router.get("/getcomment/:id",coemment.getcomment)


// router.post("/", upload.single('productImage'), (req, res, next) => {

// router.post("/image",upload.single('productImage') ,task.image)

module.exports = router;