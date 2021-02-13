import React from 'react';
import {Link} from "react-router-dom";
import Dashboard from './Dashboard';
import Food from  './Food';

const Home=()=>{
    let  flag= false;
    const handleSubmit = (event) =>{
        event.preventDefault();
        flag = true;
        console.log(flag);
    }  
    return(<div>
        <div className="container">
        <div className ="row">
            <section className="col s6 offset-s4">
                {/* <form action="" >
                    <div className="input-field">
                        <input placeholder="search your favourite Recipie" type="text"  />
                    </div>
                </form> */}
                <Dashboard method={handleSubmit}/>
                {flag===true?<Food/>:""}
            </section>
        </div>
        
    </div>
    </div>
    );

};

export default Home;
