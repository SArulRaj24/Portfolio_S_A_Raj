import React from "react";
import { Element } from "react-scroll";
import "./Expcontainer.css";

const timelineData = [
  {
    year: "2022-2026",
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    company: "R.M.D Engineering College",
    description:
      "Focused on AI, Machine Learning, Deep Learning, and Software Development.Solved Problem on Leetcode to improve my problem solving ability."
  },
  {
    year: "2021-2022",
    title: "Higher Secondary Education (HSE)",
    company: "E.R.K Hr.Sec School",
    description: "Graduated with 88.67%, specializing in Mathematics and Biology."
  },
  {
    year: "2019-2020",
    title: "SSLC",
    company: "E.R.K Hr.Sec School",
    description: "Graduated with 97.60%, developed strong foundational skills in Mathmatics."
  },
  {
    year: "Feb–Mar 2025",
    title: "Web Development Intern",
    company: "Motion Cut",
    description:
      "Built responsive web applications using React.js and Node.js. Learned CI/CD deployment pipelines and worked with REST APIs."
  },
  {
    year: "Jun–Jul 2024",
    title: "Deep Learning Intern",
    company: "Trios Technology",
    description:
      "Worked on Computer Vision models (CNN, Transfer Learning) for image classification. Optimized training pipelines with TensorFlow & PyTorch."
  },
  {
    year: "Jan–Feb 2024",
    title: "Python Intern",
    company: "CodSoft",
    description:
      "Developed Python-based applications focusing on data collection and data processing. Improved problem-solving skills through real-world projects."
  },
  {
    year: "Jan–Feb 2024",
    title: "Data Science & ML Intern",
    company: "YBI Foundation",
    description:
      "Applied Data Science techniques like regression, classification, and clustering. Hands-on experience with Pandas, Scikit-learn, and visualization libraries."
  }
];

const Expcontainer = () => {
  return (
    <Element className="exp-section" id="exp">
      <div className="exp-wrapper">
        <h2 className="exp-title">Experience & Education</h2>

        <div className="card-grid">
          {timelineData.map((item, index) => (
            <div key={index} className="exp-card">
              {/* Header */}
              <div className="exp-card-header">
                <span>{item.year}</span>
              </div>

              {/* Body */}
              <div className="exp-card-body">
                <h4>{item.title}</h4>
                <h5 className="exp-company">{item.company}</h5>
                <p className="exp-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Expcontainer;
