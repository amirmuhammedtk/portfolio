import React from 'react'
import './about.css';
import amir from './Amir.jpg'; 


function About() {
  return (
        <div className="row secr">
            {/* first col */}
            
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
  <div class="avatar">
  <img  src={amir} alt="Amir" />
</div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <h1 className='about'>About Me</h1>
        <h5 className='headab'>FULL STACK DEVELOPER</h5>
        <h6 className='absub'>Hi, I am a Mern Full Stack Web Developer and Web Designer.
I love working on new and exciting technologies emerging nowadays. I have a keen interest in Web Development and I am always looking for new opportunities to learn and grow.
My very passion is web devepment. </h6>
      </div>

 
        </div>
  
  )
}

export default About