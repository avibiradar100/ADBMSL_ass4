import axios from 'axios'
import React, {useEffect, } from 'react'

export default function RentedVideo() {

    // const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('/api/departments')
        .then((response)=>{
            if(response.status === 200)
            {
                // setDepts(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])



  return (
    <div className='container container-fluid'>
        <h3>All Rented Videos</h3>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Date of Out</th>
      <th scope="col">Date Of In</th>
    </tr>
  </thead>
  <tbody>

      <tr>
      <th>1</th>
      <td>{"Avinash Biradar"}</td>
      <td>{"17-05-2022"}</td>
      <td>{"19-05-2022"}</td>
    </tr>
    
  </tbody>
</table>
    </div>
  )
}
