import React from 'react';
import './Projectcontainer.css';
import {Element} from 'react-scroll';

const Projectcontainer = () => {
  return (
    <Element className='projectcontainer' id='project'>
      <div className='projectcontainer__details'>
        <h2>Projects</h2>
        <p>Here are the projects I have contributed during my academic journey </p>
      </div>
      <div className='projectcontainer__pro'>
      <div className='projectcontainer__pro1'>
        <h4>Image Classification using CNN </h4>
        <p>Designed and trained a Convolutional Neural Network (CNN) for image classification, utilizing data preprocessing, augmentation, and hyperparameter optimization to achieve high accuracy.</p>
      </div>
      <div className='projectcontainer__pro2'>
        <h4>Dehazing Images Using Variational Autoencoders</h4>
        <p>Focused on removing haze from images using variational auto Encoders to enhancing the image clarity.</p>
      </div>
      <div className='projectcontainer__pro3'>
        <h4>Enterprise Chatbot Development</h4>
          <p>Designed and deployed an FAQ chatbot using Retrieval-Augmented Generation (RAG) with LLaMA LLM
          to address Enterprises Content Service (ECS) software queries.
          </p>      
      </div>  
      <div className='projectcontainer__pro4'>
        <h4>SAR(Synthetic Aperture Radar) image colorization </h4>
        <p>Developed a project aimed at improving image clarity by removing haze using Variational Autoencoders (VAEs). Leveraged deep learning techniques to enhance visual quality by accurately reconstructing dehazed images, leading to improved visibility and detail preservation. The model effectively learns latent representations, enabling adaptive haze removal across various image conditions.</p>
      </div>
     
      </div>
      

    </Element>
  )
}

export default Projectcontainer;