import React from 'react';
import './Expcontainer.css';
import {Element} from 'react-scroll';

const Expcontainer = () => {
  return (
    <Element className='expcontainer' id='exp'>
        <div className='educational__detail'>
            <div className='expcontainer__value'>
                <h2>Education</h2>
            </div>
            <div className='expcontainer__clg'>
                <h2>Bachelor of Technology- Artificial Intelligence and Machine Learning</h2>
                <h3>R.M.D Engineering College</h3>
                <h4>2022-2026</h4>
            </div>
            <div className='expcontainer__cert'>
                <h2>Certification</h2>
                <h3>
                <ol>
                    <li>Microsoft Certified: Azure Fundamentals -- MICROSOFT </li>
                    <li>Oracle Certified Foundations Associate  -- ORACLE</li>
                    <li>Supervised Machine Learning: Regression and
                    Classification -- COURSERA</li>
                    <li>Python for Data Science (Elite+ Silver) -- NPTEL</li>
                    <li>Introduction to python -- NPTEL</li>
                </ol>
                </h3>
                
            </div>
            
        </div>
    </Element>
  )
}

export default Expcontainer;