import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddAdvisorPage() {

    const [theVals, setTheVals] = useState({})
    const [depts, setDepts] = useState([])
    const [depts2, setDepts2] = useState([])

    useEffect(()=>{
        axios.get('/api/students')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('/api/instructors')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts2(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('/api/add-advisor', theVals)
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
            <h3>Add Advisor</h3>
            <br />
            <form onSubmit={submitHandler}>
                <label htmlFor="student" className='form-label'>Student</label><br />
                <select className='form-select' name="student" id="student" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts.map((ele, ind)=><option key={ind} value={ele[0]}>{ele[0]}</option>)}
                </select><br /><br />

                <label className='form-label' htmlFor="instructor">Instructor</label><br />
                <select className='form-select' name="instructor" id="instructor" onChange={changeHandler}>
                <option value={-1}>Select</option>
                    {depts2.map((ele, ind)=><option key={ind} value={ele[0]}>{ele[0]}</option>)}
                </select><br /><br />
    
                <button type="submit" className='btn btn-success'>Add</button>
            </form>
        </div>
      )
}
