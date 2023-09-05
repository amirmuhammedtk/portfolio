import React from 'react'
import './quali.css';

function Qualification() {
  return (
    <div>
        <div className="row firr">
          {/* first col */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className='out'>
            <h1 className='edu'>Education</h1>
            <div className='box avat '>
              <div className='ins'>
              <h3>BSC Computer science</h3>
              <h5 className='uni'>Calicut university</h5>
              <h6>JDT Islam College of Arts and Science</h6></div>
            </div>
            </div>
            {/* next row */}
            <div className='out'>
            {/* <h1 className='edu'>Education</h1> */}
            <div className='box avat '>
              <div className='ins'>
              <h3>PLUS TWO</h3>
              <h5 className='uni'>Computer science</h5>
              <h6>Rahmaniya hss medical college</h6></div>
            </div>
            </div>
          </div>
          {/* second col */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className='out'>

          <h1 className='edu'>Intern</h1>
            <div className='box avat '>
              <div className='ins'>
              <h3>MERN Full Stack</h3>
              <h5 className='uni'>Softroniics</h5>
              <h6>2023</h6></div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Qualification