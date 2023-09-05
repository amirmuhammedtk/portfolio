import React from 'react'
import './skil.css';


function Skills() {
  return (
    <div>
        <div className="row secr">
            {/* first col */}
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <h1 className='skill'>Coding Skills</h1>
<ol class="ol-days" >
	<li>HTML</li>
	<li>CSS</li>
	<li>Javascript</li>
	<li>React</li>	
</ol>
        </div>
        {/* second col */}
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <h1 className='skill'>Proffesional Skill</h1>
<ol class="ol-days" >
	<li>Web Design</li>
	<li>Web Development</li>
	<li>React Development</li>
	<li>FrontEnd Development</li>	
</ol>
        </div>
        </div>
    </div>
  )
}

export default Skills