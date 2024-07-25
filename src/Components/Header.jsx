import { Link } from "react-router-dom";
import Contact from "./Contact";
import React from 'react';


const Header = () =>{
    return (
        <>
          <div className="">
    <div className="bg-ctr-1">
    <div className="flex-ctre-12">
    <div className="box1">
    <div className="ctr-1">
     
<p>This is header</p>
        <div className="box2">
    <Link to="/">01  About</Link>
    <Link to="/skills">02  Skills</Link>
    <Link to="/projects">03  Projects</Link>
    </div>
        </div>
</div>
</div>
<Contact />
</div>
</div>
        </>
    )
}

export default Header;