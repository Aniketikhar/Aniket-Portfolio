import React from 'react';
import "./Work.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from '../../assets/mywork_data';
import arrow_icon from "../../assets/arrow_icon.svg";


const Work = () => {
  return (
    <div id='project' className='work'>
      <div className="work-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="work-container">
        {mywork_data.map( (work , index) => {
            return <img key={index} src={work.w_img} alt={index} width={300} />
        })}
      </div>
      <div className="work-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Work
