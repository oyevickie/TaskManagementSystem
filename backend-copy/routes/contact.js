require("dotenv").config();
const nodemailer = require("nodemailer");
const {validationResult} = require("express-validator")


module.exports.contact = (req,res)=>{

          const transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: false,
            auth: {
              user: "singhkeshav96@gmail.com",
              pass: "Vickyy@1999"
            }
          });
      
          const contactInfo = {
            from: req.body.email,
            to: "singhkeshav96@gmail.com",
            subject: req.body.subject,
            html: `
              <p>${req.body.message}</p>`
          };
      
          transporter.sendMail(contactInfo, (err, data) => {
            if (err) {
              res.send(err);
            } else {
              res.send(data);
            }
          });
        }
        

        
