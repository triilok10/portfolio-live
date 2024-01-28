import React from 'react';
import css from './Resume.module.scss';
import ResumePDF from '../../../public/TrilokCV.pdf'; 

const Portfolio = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Your_Name_Resume.pdf'; 
    link.click();
  };

  const handleViewResume = () => {
    window.open(ResumePDF, '_blank');
  };

  return (
    <div className={`flexCenter ${css.wrapper}`}>
      <button onClick={handleDownloadResume}>Download Resume</button>
      <button onClick={handleViewResume}>View Resume</button>
    </div>
  );
};

export default Portfolio;
