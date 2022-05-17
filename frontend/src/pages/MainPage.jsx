import React from 'react'

export default function MainPage() {
  return (
    <div className='container container-fluid text-center'>
        <h3 style={{margin: '10px auto',border:'solid black 2px'}}>Video Store</h3>
        <br/><br/>
        <h5 className="card-title">Rent Video</h5>
        <a href="/api/addRentVideo" style={{float:'center'}} className="card-link">Add</a>
        <a href="/api/rentVideo" style={{float:'center'}}  className="card-link">View All</a>
        <br/><br/><br/><br/>
        <h5 className="card-title">Return Video</h5>
        <a href="/api/add-department" className="card-link">Add</a>
        <a href="/api/departments" className="card-link">View All</a>
    </div>
  )
}
