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

//get all departments
exports.selectAlldepartments=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM department`);

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
      //send all employees
      return res.send(result.rows);
    }

  }
}

//get all instructors
exports.selectAllinstructors=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM instructor`);

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
      //send all employees
      return res.send(result.rows);
    }

  }
}

//get all advisors
exports.selectAlladvisors=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM advisor`);

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
      //send all employees
      return res.send(result.rows);
    }

  }
}

//get all courses
exports.selectAllcourses=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM courses`);

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
      //send all employees
      return res.send(result.rows);
    }

  }
}

//get all classrooms
exports.selectAllclassrooms=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM classroom`);

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
      //send all employees
      return res.send(result.rows);
    }

  }
}

//get all timeslots
exports.selectAlltimeslots=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM timeslot`);

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
      //send all employees
      return res.send(result.rows);
    }

  }
}

//get all sections
exports.selectAllsections=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM section`);

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
      //send all employees
      return res.send(result.rows);
    }

  }
}

//get all instructors
exports.selectAllstudentssection=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM studentsection`);

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
      //send all employees
      return res.send(result.rows);
    }

  }
}

//get all instructors
exports.selectAllinstructorsection=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });

    console.log('connected to database');
    // run query to get all employees
    result = await connection.execute(`SELECT * FROM instructorsection`);

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
      //send all employees
      return res.send(result.rows);
    }

  }
}


