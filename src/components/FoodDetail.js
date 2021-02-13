import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'



const FoodDetails = (props) => {
    //const {handle} = useParams();
    const [currentMeal, setCurrentMeal] = useState(0);
    const [imgUrl, setImgUrl] = useState(0);
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const mealId = props.location.stateProp;
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+mealId)
        .then(response => {
            //console.log(response.data);
            setCurrentMeal(response.data);
            setImgUrl(response.data.meals[0].strMealThumb);
            setTitle(response.data.meals[0].strMeal);
            setInstructions(response.data.meals[0].strInstructions);
            setVideoUrl(response.data.meals[0].strYoutube);
            //setFoodList(response.data);
            //console.log(foodList);
        });
    }, [0]);
    if(currentMeal !== 0)
    {
        const part1 = videoUrl.slice(0,23);
        let part2="";
        let part3="";
        for(let i=videoUrl.length-1;i>=0;i--)
        {
            if(videoUrl[i] == '=')
                break;
            part2+=videoUrl[i];
        }
        for(let i=part2.length-1;i>=0;i--)
        {
            part3+=part2[i];
        }
        let videoLink = ""+part1+"/embed/"+part3;
        return(
            <div class="p-5">
                <div className="image-area">
                    <img style={{border:"10px solid",borderRadius:20 }} src={imgUrl} className="img-fluid" alt="food-img"/> 
                </div>
                <div className="title mt-5 mb-5">
                    <h1>{title}</h1>
                </div>
                <div className="description-area mb-5 p-5" style={{border:"5px solid", borderRadius:10, fontWeight:700}}>
                    <p>{instructions}</p>
                </div>
                <div className="video-area">
                    <iframe style={{width:"90vw", height:"100vh"}} src={videoLink} title="play"></iframe>
                </div>
            </div>
        );
    }
    else{
        return(
            <div>
            </div>
            
        )
    }
        
};

export default FoodDetails;