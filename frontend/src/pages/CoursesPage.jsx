import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function CoursesPage() {
  
    const [depts, setDepts] = useState([])

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
    }, [])
  
    return (
    <div className='container container-fluid'>
            <h3>Courses Page</h3>
            <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Credits</th>
          <th scope="col">Department</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
    
          {depts.map((ele, ind)=><tr>
          <th key={ind} scope="row">{ind+1}</th>
          <td>{ele[0]}</td>
          <td>{ele[1]}</td>
          <td>{ele[2]}</td>
        </tr>)}
        
      </tbody>
    </table>
        </div>
  )
}
