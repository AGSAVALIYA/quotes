import React from "react";
import './Quote.css';


const Quote = ({quote}) => {
    
    return (
        <div className="quote">
            {quote}
        </div>
    );
    }

    export default Quote;