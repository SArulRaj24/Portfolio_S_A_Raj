import React from 'react';
import './Topcontent.css';
import { Link } from 'react-scroll';

const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className="profile-image-wrapper">
          
        </div>
        <div className='topcontent__container'>
            <h1 className="topcontent__name">S Arulraj</h1>
            <p className="topcontent__desc">AI-driven student with a strong passion for learning, innovation, and practical application of theoretical knowledge.<br/>Eager to contribute to cutting-edge projects and collaborate in dynamic environments.</p>
            <div className="topcontent__btns">
              <a href="https://drive.google.com/file/d/1CG5V2GiVnnniP3fsNIJaAca7fq1AQXXV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className='topcontent__cvbtn'>Resume</button>
              </a>
              <Link to='project' smooth={true} duration={500} offset={-100}>
                <button className='topcontent__workbtn'>My Works</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Topcontent;
