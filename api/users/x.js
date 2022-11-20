upload: (req,res) => {
  if(req.files) {
    console.log(req.files);
    let file = req.files;
    let filename = file.name;
    console.log(file);
    console.log(filename);

    file.mv('./uploads/'+ filename, (err)=> {
        if(err) {
            res.send(err)
        } else{
            res.send("File Uploaded Successfully")
        }
    });
  }
}

sendEmail: async (req,res) => {
  const {email} = req.body
  console.log(`${email}`);
  if(req.body) {
    console.log(req.body);
    // let To = req.body;
    // console.log(To);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'amanda28@ethereal.email', // generated ethereal user
        pass: 'bnGrdFUk1njMT3apdw', // generated ethereal password
      },
    });
    
    const msg = {
      from: '"The Express App" <theExpressApp@example.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "Greeting", // Subject line
      text: "Good Morning, How are you?", // plain text body
    };

    // send mail with defined transport object
    const info = await transporter.sendMail(msg);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
}