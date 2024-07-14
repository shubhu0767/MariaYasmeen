import { Link } from "react-router-dom";
import Header from "../Components/Header";
const Projects = () => {
    return (
        <>
 <Header />
   <div className="scrollable-content "> 
                    <Link to="/typingtest">TypingTest<span>Commission 2024</span></Link> 
                    <Link to="">CrypTrack<span> Commission 2024</span></Link>
                    <Link to="">Home dashboard <span>Commission 2024</span></Link>  
                    <Link to="">History book <span>Commission 2024</span></Link>  
                    <Link to="">shop bazar <span>Commission 2024</span></Link>  
                    <Link to="">PIANo boyi <span>Commission 2024</span></Link>  
                    <Link to="">you know it <span>Commission 2024</span></Link>  
                    <Link to="">NEWSChannel <span>Commission 2024</span></Link>  
                    <Link to="">PLAin tracker <span> UI Project</span></Link>  
               
     </div>
    
        </>
    )

}
export default Projects;