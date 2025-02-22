import React from 'react';
import './Topcontainer.css';
import Topcontent from '../Topcontent/Topcontent';
import { Element } from 'react-scroll';

const Topcontainer = () => {
  return (
    <Element name='about' className='topcontainer'>
        <Topcontent />
    </Element>
  )
}

export default Topcontainer;