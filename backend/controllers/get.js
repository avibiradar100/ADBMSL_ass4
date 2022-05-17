const oracledb = require('oracledb');

//get all students
exports.selectAllstudents=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });

    console.log('connected to database');
    // run query to get all students
    result = await connection.execute(`SELECT * FROM student`);

  } catch (err) {
    //send error message
    return res.send(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close();
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
    if (result.rows.length == 0) {
      //query return zero employees
      return res.send('query send no rows');
    } else {
      //send all students
      return res.send(result.rows);
    }

  }
}




