import axios from 'axios';
import React, {useState} from 'react'

export default function AddrentVideo() {

    const [theVals, setTheVals] = useState({})


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('/api/addrentedvideo', theVals)
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
        <h3>Add Video Details</h3>
        <br />
        <form onSubmit={submitHandler}>
            <label className='form-label' htmlFor="name">Name</label><br />
            <input className='form-control' value={theVals.name} onChange={changeHandler} type="text" name="name" id="name" required /><br /><br />
            
            <label className='form-label' htmlFor="building">Date For Out</label><br />
            <input className='form-control' value={theVals.dateout} onChange={changeHandler} type="date" name="dateout" id="dateout" required /><br /><br />

            <label className='form-label' htmlFor="budget">Date for in</label><br />
            <input className='form-control' value={theVals.datein} onChange={changeHandler} type="date" name="datein" id="datein" required /><br /><br />

            <button type="submit" className='btn btn-success'>Add</button>
        </form>
    </div>
  )
}
