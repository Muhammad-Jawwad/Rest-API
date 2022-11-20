const {
    create,
    getVisitors
  } = require("./visitors.service");
  
  // const { hashSync, genSaltSync } = require("bcrypt");
    
    
  module.exports = {
    createVisitors: (req, res) => {
        const body = req.body;
        console.log(req,"Jawwad No error occur");
        // const salt = genSaltSync(10);
        // body.password = hashSync(body.password,salt);
        create(body, (err, results) => {
          console.log(results);
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection error",
              message: err
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
    },
    getVisitors: (req, res) => {
        getVisitors((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      }
      // updateUsers: (req, res) => {
      //   const body = req.body;
      //   const salt = genSaltSync(10);
      //   body.password = hashSync(body.password, salt);
      //   updateUser(body, (err, results) => {
      //     if (err) {
      //       console.log(err);
      //       return false;
      //     }
      //     if (!results){
      //       return req.json({
      //         success: 0,
      //         message: "Failed to update user"
      //       });
      //     }
      //     return res.json({
      //       success: 1,
      //       message: "updated successfully"
      //     });
      //   });
      // },
      // deleteUser: (req, res) => {
      //   const data = req.body;
      //   deleteUser(data, (err, results) => {
      //     if (err) {
      //       console.log(err);
      //       return;
      //     }
      //     if (!results) {
      //       return res.json({
      //         success: 0,
      //         message: "Record Not Found"
      //       });
      //     }
      //     return res.json({
      //       success: 1,
      //       message: "user deleted successfully"
      //     });
      //   });
      // }
      // login: (req, res) => {
      //   const body = req.body;
      //   getUserByUserEmail(body.email, (err, results) => {
      //     if (err) {
      //       console.log(err);
      //     }
      //     if (!results) {
      //       return res.json({
      //         success: 0,
      //         data: "Invalid email or password"
      //       });
      //     }
      //     const result = compareSync(body.password, results.password);
      //     if (result) {
      //       results.password = undefined;
      //       const jsontoken = sign({ result: results }, "qwe1234", {
      //         expiresIn: "1h"
      //       });
      //       return res.json({
      //         success: 1,
      //         message: "login successfully",
      //         token: jsontoken
      //       });
      //     } else {
      //       return res.json({
      //         success: 0,
      //         data: "Invalid email or password"
      //       });
      //     }
      //   });
      // }
    };