import React from 'react';
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const FoodCard = (props) =>{
    if(props.data !== undefined)
    {
        return(
                <div className="card" style={{width: "18rem"}}>
                    <img src={props.data.strMealThumb} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.data.strMeal}</h5>
                        <p className="card-text">{props.data.strTags}</p>

                        <Link to={{pathname:"/details/"+props.data.idMeal,
                        stateProp:props.data.idMeal}} className="btn btn-primary">Details</Link> 
                        {/* <Link to="/details" className="btn btn-primary">Go Somewhere</Link> */}
                    </div>
                </div>
        )
    }
    
}
export default FoodCard;