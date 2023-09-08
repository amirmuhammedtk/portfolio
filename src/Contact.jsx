import React from 'react'
import './contact.css';


function Contact() {
  return (
    <div>
        <div className="row t">
            {/* first col */}
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <h1 >Contact Me</h1>
             </div>  
                {/* second col */}
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <ol>
                        <br/>
                        <br/>
                        <li className='no'> 📱+918089893947</li>
                        <li className='no'>Email : <br/>aamir2002aamir@gmail.com</li>
                        
                    </ol>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <br></br><br></br>
                  <a href='https://github.com/amirmuhammedtk'>GitHub</a>
                  <br></br>
                  <a href='https://www.linkedin.com/in/amir-muhammed-6116b725a'>LinkedIn</a>
                </div>



        </div>
        
    </div>
  )
}

export default Contact