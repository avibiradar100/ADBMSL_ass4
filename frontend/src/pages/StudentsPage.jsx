import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function StudentsPage() {
    const [depts, setDepts] = useState([]);

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
    }, [])
  return (
    <div className='container container-fluid'>
        <h3 style={{textAlign:'center'}}>Students Page</h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Credits</th>
              <th scope="col">Department</th>
            </tr> 
          </thead>
          <tbody>
              {depts.map((ele, ind)=>
              <tr>
                <th key={ind} scope="row">{ind+1}</th>
                  <td>{ele[0]}</td>
                  <td>{ele[1]}</td>
                  <td>{ele[2]}</td>
              </tr>)
              }
          </tbody>
        </table>
    </div>
  )
}
