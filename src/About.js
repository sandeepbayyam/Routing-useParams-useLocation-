import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const About = (props) => {
  return (
    <div className="betterview greenback">
      <h1>About Me</h1>
      <Outlet></Outlet>
      <Link to="contact"> Contact</Link>
      <hr/>
      <button onClick={()=>{history.back()}}>Back</button>
    </div>
  );
};
export default About;
