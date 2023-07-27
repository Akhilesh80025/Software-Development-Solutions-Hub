const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.static("frontend"));
app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/frontend/public/index.html");
});

app.post("/",function(req, res){

  const comm = req.body.message;
   const na = req.body.nameofperson;
  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'software8solution8hub@gmail.com',
        pass: 'uopphsajmefndbkb' 
      }
    });

    var mailOptions = {
      from: 'software8solution8hub@gmail.com',
      to: req.body.username,
      cc: 'software8solution8hub@gmail.com',
      subject: 'Thanks for giving feedback ' + na,
      text: 'Thanks for your message you have sent to us --> ' + comm
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log("sent");
        res.send("Message sent successfully! Thank you for your feedback.");
        
      }
    });
    
    
  });


const port = 3000;
app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});

