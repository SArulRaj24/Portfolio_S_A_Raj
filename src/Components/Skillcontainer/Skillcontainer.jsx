import React from "react";
import "./Skillcontainer.css";
import { Element } from "react-scroll";

// Import your skill logos (place them inside /src/assets or /public)
import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
import jsLogo from "../../assets/js.png";
import reactLogo from "../../assets/react.png";
import mongodb from "../../assets/db.png";
import javaLogo from "../../assets/java.png";
import pythonLogo from "../../assets/python.png";
import sqlLogo from "../../assets/mysql.png";
import gitLogo from "../../assets/git.png";
import azureLogo from "../../assets/azure.jpg";

import intellijLogo from "../../assets/ij.jpg";
import colabLogo from "../../assets/colab.png";
import pycharmLogo from "../../assets/pycharm.jpg";
import vscodeLogo from "../../assets/vs.jpg";
import postman from "../../assets/pman.png";

function Skillcontainer() {
  const skills = [
    { name: "Java", logo: javaLogo },
    { name: "Python", logo: pythonLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React JS", logo: reactLogo },
    { name: "MongoDB", logo: mongodb },
    { name: "MySQL", logo: sqlLogo },
    { name: "Git & GitHub", logo: gitLogo },
    { name: "Azure", logo: azureLogo },
  ];

  const ides = [
    { name: "IntelliJ", logo: intellijLogo },
    { name: "Google Colab", logo: colabLogo },
    { name: "PyCharm", logo: pycharmLogo },
    { name: "VS Code", logo: vscodeLogo },
    { name: "Postman", logo: postman },
    
  ];

  return (
    <Element className="skillcontainer" id="skills">
      <div className="skillcontainer__value">
        <h2>Skillset</h2>
        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.logo} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        <h3>Tools</h3>
        <div className="skill-grid">
          {ides.map((ide, index) => (
            <div key={index} className="skill-card">
              <img src={ide.logo} alt={ide.name} />
              <p>{ide.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Skillcontainer;
