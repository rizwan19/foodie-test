import React, {useState, useEffect} from 'react';
import axios from 'axios';
import FoodCard from './FoodCard';
import FoodDetails from './FoodDetail';

const Food = (props)=>{
    const item = props.data;
    const [foodList, setFoodList] = useState(null);
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+item;
    useEffect(()=>{
        axios.get(url)
        .then(response => {
            console.log(response.data);
            setFoodList(response.data);
            //console.log(foodList);
        });
    }, [url]);
    if(foodList !== undefined && foodList!==null)
    {
        console.log("here see")
        console.log(foodList)
        if(foodList.meals!==null)
        {
            return(
                <div className="mt-5">
                    <div>
                        <h3>Search Result:</h3><br></br>
                    </div>
                    <div style={{display:'grid', gridTemplateColumns:"auto auto"}}>
                        {foodList.meals.map((food, i)=>{
                            return(<FoodCard data={food} key={i}/>)
                            
                        })}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div style={{color: "red", textAlign: "center"}}>
                    <h1>Sorry! Could not get the item!</h1>
                </div>
            )
        }
    }
    else{
        return(
            <div>
                <div>
                   
                </div>
            </div>
        );
    }
};

export default Food;