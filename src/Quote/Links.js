import React from "react";
import './Links.css';

const Links = () => {
   //function to open link
   const openLink = () => {
      window.open("https://github.com/AGSAVALIYA", '_blank');
   }

    return(
       <div>
         <div className="github">
            <button onClick={openLink}>:)   </button>
         </div>
       </div>
    )
}

export default Links;