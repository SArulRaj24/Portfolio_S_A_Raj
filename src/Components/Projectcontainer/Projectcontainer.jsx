import React from 'react';
import { Element } from 'react-scroll';
import './Projectcontainer.css';

import dehaze from '../../assets/dehaze.png';
import bot from '../../assets/pic-4.png';
import sar from '../../assets/sar.png';
import cnn from '../../assets/cnn.png';
import drug1 from '../../assets/drug (1).png';
import port from '../../assets/port.png';
import ecom from '../../assets/ecom.png';

const projects = [

   {
    title: "Drug Forecasting",
    description:
      "Developed a time series forecasting model for pharmaceutical sales analysis using historical data patterns to predict future sales trends and optimize inventory management.",
    image: drug1,
    link: "https://github.com/SArulRaj24/DrugForecasting",
  },

   {
    title: "Portfolio Website",
    description:
      "Developed a personal portfolio website to showcase my projects and skills using React.",
    image:port,
    link: "https://github.com/SArulRaj24/Portfolio_S_A_Raj",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce platform using Spring Boot backend and React.js frontend with features including product management, shopping cart.",
    image:ecom,
    link: "https://github.com/SArulRaj24/E_Com_SpringBoot",
  },

   {
    title: "Enterprise Chatbot (RAG + LLaMA)",
    description:
      "Built an FAQ chatbot using Retrieval-Augmented Generation and LLaMA LLM for enterprise content support.",
    image: bot,
    link: "https://github.com/SArulRaj24/EP_BOT",
  },
  {
    title: "Image Classification using CNN",
    description:
      "Designed and trained a CNN for image classification using data augmentation and hyperparameter tuning.",
    image: cnn,
    link: "https://colab.research.google.com/drive/1fOuIL2ztIivvS0NvSeaZ-InFY8QOnHpX#scrollTo=nJSbmvARlDjJ",
  },
  {
    title: "Dehazing with VAEs",
    description:
      "Used variational autoencoders to remove haze and improve image clarity in varying conditions.",
    image: dehaze,
    link: "https://colab.research.google.com/drive/1-hOVRp2Q7klg4ZMc3SFpedkQWvaga54W",
  },
 
  {
    title: "SAR Image Colorization",
    description:
      "Colorized SAR (Synthetic Aperture Radar) images and enhanced details using VAEs and deep learning.",
    image: sar,
    link: "https://github.com/SArulRaj24/DrugForecasting",
  },
 
 
];

const Projectcontainer = () => {
  return (
    <Element name="project" className="project-container">
      <h2>Projects</h2>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img className="card-img" src={project.image} alt={project.title} />
            <div className="card-content">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-description">{project.description}</p>
              <span>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
                View Project
              </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Projectcontainer;
