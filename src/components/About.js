import React from 'react';
import {Link} from "react-router-dom";

const About=()=>{
    return(
        <div  style={{marginLeft: 20 ,fontFamily:"serif",fontSize:18}}  ><h3>About</h3>
        <p>Welcome to Foodie where you’ll find delicious, tried-and-tested recipes for every occasion made with every 
            day ingredients! They all come complete with step-by-step photo tutorials, videos and detailed instructions, 
            all to help you succeed in your kitchen.</p>
        <p>Foodie has been around since 2020 and it started out as a place for me to store our recipes that We’ve 
            collected over the years from friends and family. Here you’ll find hundreds and hundreds of delicious recipes,
            so make sure to check out the Recipes section and browse all your favorites!</p>
        <p>People ask us all the time, what sort of food we cook and blog about. The truth is, everything. We cook anything
            and everything, and well, we eat everything. We, most of all, love simple recipes with few everyday 
            ingredients that you can either find in your pantry, or are easy to find at your local grocery store.</p>
    
            <img src="https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg" alt =""  width="800" height="400" />
        
        </div>
        );

};

export default About;