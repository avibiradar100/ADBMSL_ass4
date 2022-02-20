const express = require('express');
const bodyParser=require('body-parser');
const { createstudent, createdepartment, createinstructor, createadvisor, createcourse, createclassroom, createtimeslot, createstudentsection, createinstructorsection, createsection } = require('./controllers/create');
const { selectAllstudents, selectAlldepartments, selectAllinstructors, selectAlladvisors, selectAllcourses, selectAllclassrooms, selectAlltimeslots, selectAllsections, selectAllstudentssection, selectAllinstructorsection } = require('./controllers/get');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
const port = 4000;


// create student
app.post('/api/add-student',function(req,res){
    return createstudent(req,res);
});

// create department
app.post('/api/add-department',function(req,res){
    return createdepartment(req,res);
});

// create instructor
app.post('/api/add-instructor',function(req,res){
    return createinstructor(req,res);
});

// create advisor
app.post('/api/add-advisor',function(req,res){
    return createadvisor(req,res);
});

// create courses
app.post('/api/add-course',function(req,res){
    return createcourse(req,res);
});

// create classroom
app.post('/api/add-classroom',function(req,res){
    return createclassroom(req,res);
});

// create timeslot
app.post('/api/add-timeslot',function(req,res){
    return createtimeslot(req,res);
});

// create Section
app.post('/api/add-section',function(req,res){
    return createsection(req,res);
});

// create studentAndSection
app.post('/api/add-student-section',function(req,res){
    return createstudentsection(req,res);
});

// create instructor Section
app.post('/api/add-instructor-section',function(req,res){
    return createinstructorsection(req,res);
});

//get students
app.get('/api/students', function (req, res) {
  return selectAllstudents(req, res);
});

//get departments
app.get('/api/departments', function (req, res) {
  return selectAlldepartments(req, res);
});

//get instructors
app.get('/api/instructors', function (req, res) {
  return selectAllinstructors(req, res);
});

//get advisors
app.get('/api/advisors', function (req, res) {
  return selectAlladvisors(req, res);
});

//get courses
app.get('/api/courses', function (req, res) {
  return selectAllcourses(req, res);
});

//get classroom
app.get('/api/classrooms', function (req, res) {
  return selectAllclassrooms(req, res);
});

//get timeslots
app.get('/api/timeslots', function (req, res) {
  return selectAlltimeslots(req, res);
});

//get section
app.get('/api/sections', function (req, res) {
  return selectAllsections(req, res);
});

//get studentsection
app.get('/api/student-section', function (req, res) {
  return selectAllstudentssection(req, res);
});

//get instructorsection
app.get('/api/instructor-section', function (req, res) {
  return selectAllinstructorsection(req, res);
});

app.listen(port, () => 
  console.log("nodeOracleRestApi app listening on port %s!", port)
);
