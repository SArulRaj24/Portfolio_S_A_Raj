import React from 'react';
import './Expcontainer.css';
import { Element } from 'react-scroll';

const timelineData = [
  {
    year: '2017',
    description: "Completed Bachelor's degree in Computer Science with a focus on software development."
  },
  {
    year: '2016',
    description: 'Interned at XYZ Tech as a Front-End Developer using React and Tailwind.'
  },
  {
    year: '2015',
    description: 'Built several academic projects involving JavaScript, Node.js, and REST APIs.'
  },
  {
    year: '2014',
    description: 'Started exploring web development, HTML, CSS, and JavaScript.'
  },
  {
    year: '2013',
    description: 'Graduated High School with a keen interest in technology and programming.'
  },
  {
    year: '2013',
    description: 'Graduated High School with a keen interest in technology and programming.'
  },{
    year: '2013',
    description: 'Graduated High School with a keen interest in technology and programming.'
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
