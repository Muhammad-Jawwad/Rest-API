const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
    console.log(data,'Jawwad');
    console.log("\n Some Error is ocurred here");
    // console.log(data);
    
    pool.query(
      `insert into msgTable(name, email, subject, message) 
            values(?,?,?,?)`,
      [
        data.name,
        data.email,
        data.subject,
        data.message
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, data);
      }
    );
  },
  getVisitors: callBack => {
    pool.query(
      `select id,name,email,subject,message from msgTable`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};