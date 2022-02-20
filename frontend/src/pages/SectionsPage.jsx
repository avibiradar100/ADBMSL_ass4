import axios from 'axios'
import React, {useEffect, useState} from 'react'

export default function SectionsPage() {

    const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('/api/sections')
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
            <h3>Sections Page</h3>
            <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Course</th>
          <th scope="col">Semester</th>
          <th scope="col">Year</th>
          <th scope="col">Classroom Building</th>
          <th scope="col">Day</th>
        </tr>
      </thead>
      <tbody>
    
          {depts.map((ele, ind)=><tr>
          <th key={ind} scope="row">{ind+1}</th>
          <td>{ele[0]}</td>
          <td>{ele[1]}</td>
          <td>{ele[2]}</td>
          <td>{ele[3]}</td>
          <td>{ele[4]}</td>
          <td>{ele[5]}</td>
          <td>{ele[6]}</td>
          <td>{ele[7]}</td>
        </tr>)}
        
      </tbody>
    </table>
        </div>
      )
}
