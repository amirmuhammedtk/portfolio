import React from 'react'
import './home.css';
import amir from './Amir.jpg'; 

function Home() {
  return (
  <div>
    <div className="row firr">
        {/* first col */}
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 fir">
            {/* head */}
            <main class="container">
  <p>Hello 👋 I'm</p>
  <section class="animation">
    <div class="first"><div>AMIR MUHAMMED</div></div>
    <div class="second"><div>Web Developer</div></div>
    <div class="third"><div>MERN FULLSTACK</div></div>
  </section>
</main>
<h5 className='hf'>
Hi, I am a Mern Full Stack Web Developer and Web Designer.
I love working on new and exciting technologies emerging nowadays. I have a keen interest in Web Development and I am always looking for new opportunities to learn and grow. 
</h5>
<button className='butn'><a href='https://github.com/amirmuhammedtk' className='butn'>GitHub</a></button>
<a className='lin'href='https://www.linkedin.com/in/amir-muhammed-6116b725a'>in</a>


        </div>
        {/* second col */}
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 sec">
          <img className='backg' src='https://cdn.pixabay.com/photo/2017/10/19/12/49/background-2867531_640.png'/>
        <img className='ami ' src={amir} alt="Amir" />
     
        </div>
    </div>
  </div>
  
  )
}

export default Home