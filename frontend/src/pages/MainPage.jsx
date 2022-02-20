import React from 'react'

export default function MainPage() {
  return (
    <div className='container container-fluid text-center'>
        <h3 style={{margin: '10px auto',border:'solid black 2px'}}>College /    University Web Portal</h3>
        <div className="row">
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Students</h5>
                        <a href="/api/add-student" className="card-link">Add</a>
                        <a href="/api/students" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Departments</h5>
                        <a href="/api/add-department" className="card-link">Add</a>
                        <a href="/api/departments" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Instructors</h5>
                        <a href="/api/add-instructor" className="card-link">Add</a>
                        <a href="/api/instructors" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Advisors</h5>
                        <a href="/api/add-advisor" className="card-link">Add</a>
                        <a href="/api/advisors" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Courses</h5>
                        <a href="/api/add-course" className="card-link">Add</a>
                        <a href="/api/courses" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Classroom</h5>
                        <a href="/api/add-classroom" className="card-link">Add</a>
                        <a href="/api/classrooms" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Time Slot</h5>
                        <a href="/api/add-timeslot" className="card-link">Add</a>
                        <a href="/api/timeslots" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Section</h5>
                        <a href="/api/add-section" className="card-link">Add</a>
                        <a href="/api/sections" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Student and Section</h5>
                        <a href="/api/add-student-section" className="card-link">Add</a>
                        <a href="/api/student-sections" className="card-link">View All</a>
                    </div>
                </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-sm-12">
                <div className="card" style={{width: '18rem', margin: '25px 10px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Instructor and Section</h5>
                        <a href="/api/add-instructor-section" className="card-link">Add</a>
                        <a href="/api/instructor-sections" className="card-link">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
