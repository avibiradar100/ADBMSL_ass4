import axios from 'axios';
import React, {useState, useEffect} from 'react';

export default function AddSectionPage() {

    const [depts, setDepts] = useState([]);
    const [depts2, setDepts2] = useState([]);
    const [depts3, setDepts3] = useState([]);

    useEffect(()=>{
        axios.get('/api/courses')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('/api/classrooms')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts2(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('/api/timeslots')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts3(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


    const [theVals, setTheVals] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('/api/add-section', theVals)
        .then((response)=>{
             if(response.status===201)
                alert("added Sucessfully");
            else
                alert("ERROR");
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const changeHandler = (event) => {
        setTheVals({...theVals, [event.target.name]: event.target.value})
    }

    return (
        <div className='container container-fluid text-center'>
            <h3>Add Section</h3>
            <br />
            <form onSubmit={submitHandler}>
                <label className='form-label' htmlFor="semester">Semester</label><br />
                <input className='form-control' value={theVals.semester} onChange={changeHandler} type="text" name="semester" id="semester" required /><br /><br />

                <label className='form-label' htmlFor="year">Year</label><br />
                <input className='form-control' value={theVals.year} onChange={changeHandler} type="text" name="year" id="year" required /><br /><br />

                <label className='form-label' htmlFor="course">Course</label><br />
                <select className='form-select' name="course" id="course" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts.map((ele, ind)=><option key={ind} value={ele[0]}>{ele[0]}</option>)}
                </select><br /><br />

                <label className='form-label' htmlFor="classroom">Classroom</label><br />
                <select className='form-select' name="classroom" id="classroom" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts2.map((ele, ind)=><option key={ind} value={ele[1]}>{ele[0]}  {ele[1]}</option>)}
                </select><br /><br />

                <label className='form-label' htmlFor="timeslot">Time Slot</label><br />
                <select className='form-select' name="timeslot" id="timeslot" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts3.map((ele, ind)=><option key={ind} value={ele[0]}>{ele[0]} {ele[1]}---{ele[2]}</option>)}
                </select><br /><br />

                <button type="submit" className='btn btn-success'>Add</button>

            </form>

        </div>
      )
}
