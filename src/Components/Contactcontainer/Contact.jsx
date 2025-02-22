import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll';
import {IconButton} from '@mui/material';
import { GitHub,LinkedIn,Instagram} from '@mui/icons-material';

const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h2>Contact</h2>
        <div className='contact__container'>
          <p>
            Email: <a href='mailto:sarulrajofficial@gmail.com'><span>sarulrajofficial@gmail.com</span></a>
          </p>
          <p>
            Github username: <span>SArulRaj24</span>
          </p>
          <div className='contact__icon'>
            <a href="https://github.com/SArulRaj24">
            {/* <p>Github</p> */}
              <IconButton>
                <GitHub />
              </IconButton>
            </a>
            <a href="https://linkedin.com/in/arulraj-s-b-tech/">
            {/* <p>Linkedin</p> */}
              <IconButton>
                <LinkedIn />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/s_a_raj_forever/">
                {/* <p>Instagram</p> */}
              <IconButton>
                <Instagram />
              </IconButton>
            </a>
          </div>
        </div>
    </Element>
    
  )
}

export default Contact;