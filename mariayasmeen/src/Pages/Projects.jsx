import { Link } from "react-router-dom";
import Header from "../Components/Header";
import React from 'react';

const Projects = () => {
    return (
        <>
 <Header />
   <div className="scrollable-content "> 
                    <Link to="/typingtest">Forent end <span>/ Commission 2024 </span></Link> 
                    <Link to="">Projects front end<span>/ Projects goes here 2024</span></Link>
               
     </div>
    
        </>
    )

}
export default Projects;