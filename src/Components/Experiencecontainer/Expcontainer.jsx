import React from 'react';
import './Expcontainer.css';
import { Element } from 'react-scroll';

const timelineData = [
  {
    year: '2022-2026',
    description: "Pursuing a Bachelor's degree in Artificial Intelligence and Machine Learning at R.M.D Enginerring College"
  },
  {
    year: '2021-2022',
    description: 'Completed HSE at E.R.K Hr.Sec School with 88.67%.'
  },
  {
    year: '2019-2020',
    description: 'Completed SSLC at E.R.K Hr.Sec School with 97.60%.'
  },
  {
    year: 'Feb-Mar 2025',
    description: 'Motion Cut – Web Development Intern.'
  },
  {
    year: 'June-July 2024',
    description: 'Trios Technology – Deep Learning Intern.'
  },
  {
    year: 'Jan-Feb 2024',
    description: 'CodSoft – Python Intern.'
  },
  {
    year: 'Jan-Feb 2024',
    description: 'Ybi Foundation – Data Science and Machine Learning'
  }  
];

const Expcontainer = () => {
  return (
    <Element className='expcontainer' id='exp'>
      <div className='educational__detail'>
        <div className='expcontainer__value'>
          <h2>Experience & Education</h2>
        </div>

        <div className='timeline'>
          {timelineData.map((item, index) => (
            <div
              className={`container ${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
            >
              <div className='content'>
                <h2>{item.year}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Expcontainer;
