import React, { useEffect, useRef, useState } from 'react'
import './RecipeSearch.css'
import axios from 'axios';
import ResultsSearch from './ResultsSearch';
function RecipeSearch() {

    let app_Id = '27105c10';
    let app_Keys = '0aeac86e785b8affac299a84f5350358';
    let inputRef = useRef(null);
    let [results,setResults] = useState([]);
    let [query, setQuery] = useState(localStorage.getItem('searchQuery') || 'salad');

    async function recipeSearch() {
        let respone = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${app_Id}&app_key=${app_Keys}`);

        setResults(respone.data.hits);
        console.log(query)
        console.log(results)
    }

    useEffect(()=>{
        localStorage.setItem('searchQuery', query);
        recipeSearch();
    },[query]);

    function submitForm() {
        recipeSearch();
    }
    return (
        <div>
            <div className="api-food-recipe">
                <div className="header">Recipe Search <span>API</span></div>
                <div className="search-form">
                    <input ref={inputRef} type="text" className='search-box' placeholder='Searching the dish name' value={query} onChange={(e)=>setQuery(e.target.value)}/>
                    <div className="search-btn" onClick={()=> submitForm()}>Search</div>
                </div>

                <div className='search-result'>
                    {
                        results.map((result,index)=>(
                            <ResultsSearch key={index} 
                            image={result.recipe.image}
                            title={result.recipe.label}
                            calories={result.recipe.calories}
                            ingredients={result.recipe.ingredients}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RecipeSearch
