import { useState } from "react";
import "./Collapse.css";

export default function Collapse(props) {
    
    const [isOpenMenu, setIsOpenMenu] = useState (true);

    const toggleMenu = () => {
          setIsOpenMenu(! isOpenMenu); // Ferme le menu si on clique sur le même
        }
    
    return (
        <div className="description-dropdown">
          <div className="title-dropdown"
            onClick={() => toggleMenu()} 
            style={{ cursor: 'pointer' }} 
            // aria-expanded={isOpenMenu === "description"}
          >
            {props.title}
            <span className={`arrow ${isOpenMenu === true ? "arrow-up" : ""}`}> <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6635 7.85949L2.53058 10.0046L14.4605 21.9233L26.3904 9.99257L24.2575 7.85949L14.4605 17.6572L4.6635 7.85949Z" fill="white"/>
                </svg></span>
          </div>
          { isOpenMenu &&
          <div className={`dropdown-content ${isOpenMenu === true ? "open" : ""}`}>
            <p>{props.content}</p>
          </div>
}
        </div>
    );

}




