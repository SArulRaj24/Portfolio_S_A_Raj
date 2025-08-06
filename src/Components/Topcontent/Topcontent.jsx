import React from 'react';
import './Topcontent.css';
import { Link } from 'react-scroll';

const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className="profile-image-wrapper">
          
        </div>
        <div className='topcontent__container'>
            <h1 className="topcontent__name">I'M, S Arulraj</h1>
            <p className="topcontent__desc">I'm an inventive software engineer with a strong focus on AI, driven by curiosity and a clear sense of purpose. I enjoy solving complex problems and turning them into real-world solutions through code. I'm always eager to learn, adapt, and make a meaningful impact at scale.</p>
            <div className="topcontent__btns">
              <a href="https://drive.google.com/file/d/1gixU3GxDvPjox_5-XSMKQEA_rTPhqVKI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
