const express = require('express');
const bodyParser=require('body-parser');
const { createrentvideo} = require('./controllers/create');
const { selectAllstudents} = require('./controllers/get');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
const port = 4000;


// create student
app.post('/api/addrentedvideo',function(req,res){
    return createrentvideo(req,res);
});


//get students
app.get('/api/students', function (req, res) {
  return selectAllstudents(req, res);
});

app.listen(port, () => 
  console.log("nodeOracleRestApi app listening on port %s!", port)
);
