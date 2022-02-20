const oracledb = require('oracledb');
//create student
exports.createstudent=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into student values " +
            "(:name, :credits, :department) ", [req.body.name, req.body.credits,
              req.body.department], {
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

//create department
exports.createdepartment=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into department values " +
            "(:name, :building, :budget) ", [req.body.name, req.body.building,
              req.body.budget], {
              autoCommit: true,
    });
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

//create instructor
exports.createinstructor=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into instructor values " +
            "(:name, :salary, :department) ", [req.body.name, req.body.salary,
              req.body.department], {
              autoCommit: true,
    });
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

//create advisor
exports.createadvisor=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into advisor values " +
            "(:student, :instructor) ", [req.body.student, req.body.instructor], {
              autoCommit: true,
    });
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

//create course
exports.createcourse=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into courses values " +
            "(:title, :credits, :department) ", [req.body.title, req.body.credits,
              req.body.department],{
              autoCommit: true,
    });
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

//create classroom
exports.createclassroom=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into classroom values " +
            "(:building, :room_number, :capacity) ", [req.body.building, req.body.room_number, req.body.capacity],{
              autoCommit: true,
    });
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

//create time Slot
exports.createtimeslot=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into timeslot values " +
            "(:day, :startime, :endtime) ", [req.body.day, req.body.startime, req.body.endtime],{
              autoCommit: true,
    });
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

//create section
exports.createsection=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into section values " +
            "(:semester, :year, :course, :classroom, :timeslot) ", [req.body.semester, req.body.year, req.body.course,req.body.classroom, req.body.timeslot],{
            autoCommit: true,
    });
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

//create time Slot
exports.createtimeslot=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into timeslot values " +
            "(:day, :startime, :endtime) ", [req.body.day, req.body.startime, req.body.endtime],{
              autoCommit: true,
    });
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

//create student section
exports.createstudentsection=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into timeslot values " +
            "(:grade, :section, :student) ", [req.body.grade, req.body.section, req.body.student],{
              autoCommit: true,
    });
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

//create instructor section
exports.createinstructorsection=async(req, res)=>{
  try {
    connection = await oracledb.getConnection({
      user: "system",
      password: "system", 
      connectString: "localhost/XE"
    });
    console.log('connected to database');
    await connection.execute("insert into timeslot values " +
            "(:instructor, :section) ", [req.body.instructor, req.body.section],{
              autoCommit: true,
    });
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