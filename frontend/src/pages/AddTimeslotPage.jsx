import axios from 'axios';
import React, {useState} from 'react'

export default function AddTimeslotPage() {

    const [theVals, setTheVals] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('/api/add-timeslot', theVals)
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
            <h3>Add Timeslot</h3>
            <br />
            <form onSubmit={submitHandler}>
            <label className='form-label' htmlFor="day">Day</label><br />
            <input className='form-control' value={theVals.day} onChange={changeHandler} type="text" name="day" id="day" required /><br /><br />

            <label className='form-label' htmlFor="startTime">Start Time</label><br />
            <input className='form-control' value={theVals.startime} onChange={changeHandler} type="text" name="startime" id="startime" required /><br /><br />

            <label className='form-label' htmlFor="endTime">End Time</label><br />
            <input className='form-control' value={theVals.endtime} onChange={changeHandler} type="text" name="endtime" id="endtime" required /><br /><br />

                <button type="submit" className='btn btn-success'>Add</button>
            </form>
        </div>
      )
}
