import React from 'react';
import { Element } from 'react-scroll';
import './Projectcontainer.css';
import pic1 from '../../assets/pic-1.png';
import pic2 from '../../assets/pic-2.png';
import pic3 from '../../assets/pic-3.png';
import pic4 from '../../assets/pic-4.png';

const projects = [
  {
    title: "Image Classification using CNN",
    description:
      "Designed and trained a CNN for image classification using data augmentation and hyperparameter tuning.",
    image:
      "https://images.pexels.com/photos/31133725/pexels-photo-31133725/free-photo-of-streetlamp-amidst-blooming-cherry-blossoms-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Dehazing with VAEs",
    description:
      "Used variational autoencoders to remove haze and improve image clarity in varying conditions.",
    image:pic1,
  },
  {
    title: "Enterprise Chatbot (RAG + LLaMA)",
    description:
      "Built an FAQ chatbot using Retrieval-Augmented Generation and LLaMA LLM for enterprise content support.",
    image: pic4,
  },
  {
    title: "SAR Image Colorization",
    description:
      "Colorized SAR (Synthetic Aperture Radar) images and enhanced details using VAEs and deep learning.",
    image: "https://images.pexels.com/photos/31133725/pexels-photo-31133725/free-photo-of-streetlamp-amidst-blooming-cherry-blossoms-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Project Placeholder 5",
    description:
      "You can add another project here later with a title and description.",
    image: "https://images.pexels.com/photos/31133725/pexels-photo-31133725/free-photo-of-streetlamp-amidst-blooming-cherry-blossoms-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Project Placeholder 6",
    description:
      "You can update this card with a future academic or personal project.",
    image: "https://images.pexels.com/photos/31133725/pexels-photo-31133725/free-photo-of-streetlamp-amidst-blooming-cherry-blossoms-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", 
  },
];

const Projectcontainer = () => {
  return (
    <Element name="project" className="project-container">
      
<h2>Projects</h2>

      <div className="card-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front">
                <img src={project.image} alt={project.title} className="card-img" />
                <div className="card-title-overlay">
                  <h5 className="card-title">{project.title}</h5>
                </div>
              </div>

              {/* Back Side */}
              <div
                className="card-back"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              >
                <div className="card-back-overlay" />
                <div className="card-back-content">
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </div>
          
        ))}
      </div>
      
    </Element>
  );
};

export default Projectcontainer;
