import React from 'react';
import { Element } from 'react-scroll';
import './Projectcontainer.css';

import dehaze from '../../assets/dehaze.png';
import bot from '../../assets/pic-4.png';
import sar from '../../assets/sar.png';
import cnn from '../../assets/cnn.png';
import glucose from '../../assets/glu.jpg';
import port from '../../assets/port.png';

const projects = [
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
    title: "Enterprise Chatbot (RAG + LLaMA)",
    description:
      "Built an FAQ chatbot using Retrieval-Augmented Generation and LLaMA LLM for enterprise content support.",
    image: bot,
    link: "https://github.com/SArulRaj24/EP_BOT",
  },
  {
    title: "SAR Image Colorization",
    description:
      "Colorized SAR (Synthetic Aperture Radar) images and enhanced details using VAEs and deep learning.",
    image: sar,
    link: "https://github.com/SArulRaj24/SAR_image_colourization",
  },
  {
    title: "Glucose Level Indicator",
    description:
      "Created a Glucose level Indicator using Arduino and GSM Module which tracks the glucose level in the bottle and sends an alert message once the glucose level reaches a certain limit.",
    image: glucose,
    link: "https://github.com/SArulRaj24/Glucose_level_indicator",
  },
  {
    title: "Portfolio Website",
    description:
      "Developed a personal portfolio website to showcase my projects and skills using React.",
    image:port,
    link: "https://github.com/SArulRaj24/Portfolio_S_A_Raj",
  }
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
