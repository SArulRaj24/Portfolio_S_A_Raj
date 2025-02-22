import React from 'react';
import './Skillcontainer.css';
import { Element } from 'react-scroll';
// import Skillimg from '../../assest/pic.jpg';
import LinearProgress from "@mui/material/LinearProgress";


function Skillcontainer(){
  return (
    <Element className='skillcontainer' id='skills'>
        {/* <div className='skillcontainer__img'>
            <img src={Skillimg} alt="Img" />
        </div> */}
        <div className='skillcontainer__value'>
            <h2>Skillset</h2>
            <div className='skillcontainer__skill'>
                <h5>HTML</h5>
                <div className='skillcontainer__slider__value1'>
                    <LinearProgress variant='determinate' value={85}/>
                </div>
            </div>
            <div className='skillcontainer__skill'>
                <h5>CSS</h5>
                <div className='skillcontainer__slider__value2'>
                    <LinearProgress variant='determinate' value={75}/>
                </div>
            </div>
            <div className='skillcontainer__skill'>
                <h5>JAVASCRIPT</h5>
                <div className='skillcontainer__slider__value3'>
                    <LinearProgress variant='determinate' value={50}/>
                </div>
            </div>
            <div className='skillcontainer__skill'>
                <h5>C</h5>
                <div className='skillcontainer__slider__value4'>
                    <LinearProgress variant='determinate' value={50}/>
                </div>
            </div>
            <div className='skillcontainer__skill'>
                <h5>JAVA</h5>
                <div className='skillcontainer__slider__value5'>
                    <LinearProgress variant='determinate' value={60}/>
                </div>
            </div>
            <div className='skillcontainer__skill'>
                <h5>SQL</h5>
                <div className='skillcontainer__slider__value6'>
                    <LinearProgress variant='determinate' value={90}/>
                </div>
            </div>
            <div className='skillcontainer__skill'>
                <h5>REACT JS</h5>
                <div className='skillcontainer__slider__value7'>
                    <LinearProgress variant='determinate' value={75}/>
                </div>
            </div>
            <div className='skillcontainer__skill'>
                <h5>GIT & GITHUB</h5>
                <div className='skillcontainer__slider__value7'>
                    <LinearProgress variant='determinate' value={75}/>
                </div>
            </div>
        </div>
    </Element>
  )
}

export default Skillcontainer;