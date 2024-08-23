import React from 'react'
import { Link } from 'react-router-dom';

const ResultsSearch = (props) => {
    let {image,title,calories,ingredients} = props;
    return (
        <div>
            <Link to='/details' state={{image,title,calories,ingredients}}>
                <div className="image">
                    <img src={image} alt="" />
                    <div className="overlay">
                        <div className="text" style={{color:'white'}}>Show Recipe</div>
                    </div>
                </div>
            </Link>
            <h3 className="title" style={{fontFamily:"'Lobster', cursive"}}>{title}</h3>
            <p className="calories"><span style={{color:'#6ACC00', fontSize:'18px',fontWeight:'600'}}>calories:</span> {calories}</p>
        </div>
    )
}

export default ResultsSearch
