import React from 'react';
import {Link} from "react-router-dom";

const Help=()=>{
    return(
        <div  style={{marginLeft: 20 ,fontFamily:"serif",fontSize:20}} ><h3>Help</h3>
        <h4>FAQ Categories:</h4>
        <p><b>Please review our Frequently Asked Questions. We try to keep them up to date.</b></p>
        <ul><li><b>Q1: </b>How to get my favourite recipie?</li>
        <li><b>Ans: </b>Go to the main page and search what you want.</li></ul>
        <h4 style={{marginTop: 40}}>Contact Us</h4>
        <p><b>There are a few different ways to keep in touch with us:</b></p>
        <ol><li>Interact with us on Twitter</li>
        <li>Join with us on Facebook</li>
        <li>Ask anything in Gmail</li>
        </ol>
        </div>
    );

};

export default Help;