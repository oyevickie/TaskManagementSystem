
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const User = require("../models/User")

process.env.SECRET_KEY = 'secret'

// Register

module.exports.register = (req,res) =>{
    const today = new Date()
    const userdata = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password : req.body.password,
        dob: req.body.dob,
        phone: req.body.phone,
        Bio: req.body.Bio,
        address: req.body.address,
        
        created: today

    }

    User.findOne({
        email: req.body.email
    })
    .then(user =>{
        if(!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
              console.log(hash);
              
              var string = decodeURIComponent(hash);
              console.log(string);
              
                userdata.password = hash
                User.create(userdata)
                .then(user =>{
                    res.json({
                        status: user.email + ' Registered'})
                    })
                    .catch(err => {
                        res.send('error: ' +  err)
                    })
                })
            }else{
                res.json({error: "User Already Exists"})
            }
    })
    .catch(err => {
        res.send('errors: ' + err)
    })
}


// Login with email

module.exports.login= (req, res) => {

  checkEmail = req.body.email.search(/\@/g);
  var isEmail ;
  

  if(checkEmail==-1) {
    isEmail = false;
  }
  else {
    isEmail = true;
  }

  console.log(isEmail);



  if(isEmail===true) {
    
    User.findOne({ email: req.body.email }, (err, user)=> {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.' + user);
    })
    .then(user => {

      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({  error: 'password not Match' });

      if (user) {
        const payload = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          addadmin: user.addadmin
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn : 60*60*24
        })
        res.json({ token: token })
      }
      
      else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
  }
  // Signin with Username
  else {
    User.findOne({ username: req.body.email }, (err, user)=> {
      if (err) return res.status(500).send('Error on the server.');
      if (!user) return res.status(404).send('No user found.');
    })
    .then(user => {

      var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) return res.status(401).send({  error: 'password not Match' });

      if (user) {
        const payload = {
          _id: user._id,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          addadmin: user.addadmin
        }
        let token = jwt.sign(payload, process.env.SECRET_KEY, {
          expiresIn : 60*60*24
        })
        res.json({ token: token })
      }
      
      else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })

  }
    
}

  // Update a user


module.exports.updateUser = async (req,res) =>{

  try {
      let user = await User.updateOne({_id: req.params.id}, {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      dob: req.body.dob,
      phone: req.body.phone,
      Bio: req.body.Bio,
      address: req.body.address
      }, { upsert: false, new: true });
      res.json(user)
  }
  catch (e) {
      console.log("error in put of user", e.message, e.toString());
      res.json({ message: "error", error: e.message }) 
  }


}


// profile


module.exports.gett =  async (req,res) =>{


var decoded = jwt.verify(req.headers['authorization'],process.env.SECRET_KEY )

  User.findOne({
    _id: decoded._id
  })
  .then(user => {
    if(user) {
      res.json(user)
    }else {
      res.send('user does not')
    }
  })



    
  }



// get users

module.exports.get =  async (req,res) =>{
  try{
    
    let tasks = await User.find({addadmin: "false"});
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
        let user = await User.findById((req.params.id))
        res.json(user)
    }
    catch (e) {
        console.log("error in put of task", e.message, e.toString());
        res.json({ message: "error", error: e.message }) 
    }


}  



  // delete
  
  module.exports.deleteUser= async (req, res)=> {
    try {
      
      let task = await User.findByIdAndRemove(req.params.id);
      res.json({
        status: User.email + ' Deleted'
      })
    }
    catch (e) {
        console.log("error in delete of User", e.message, e.toString());
        res.json({ message: "error", error: e.message }) 
    }
      
}




// Update Password

module.exports.password = async (req,res) =>{

if(req.body.password == req.body.confrimPassword) {


  const pass = {
    password: req.body.password
  }
  User.findOne({
    id: req.params.id
  })
  .then(user => {
    if(!user) {
      bcrypt.hash(req.body.password, 10, (err, hash)=>{
        HashPassword = hash
        console.log(HashPassword);
        
        User.update({_id: req.params.id}, {password: HashPassword})
        .then(user => {
          res.json({
            status: HashPassword + ' Updated'})
        })
        .catch(err => {
            res.send('error: ' +  err)
        })
        })
      }
      else {
      res.json({status: "not Update"})
      }
    })

}
else {
  res.send("Password Does not match.")
}


  }


