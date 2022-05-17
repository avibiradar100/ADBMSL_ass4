const oracledb = require('oracledb');
//create student
exports.createrentvideo=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into video values " +
            "(:name, :dateout, :datein) ", [req.body.name, req.body.dateout,
              req.body.datein], {
                autoCommit: true,
    },);
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

    res.status(201).json({
        success:true
    })
  }
}

