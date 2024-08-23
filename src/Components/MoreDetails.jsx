import React from 'react'
import './MoreDetails.css'
import { useLocation,Link } from 'react-router-dom'

function MoreDetails() {
    let location = useLocation();
    let {image,title,calories,ingredients} = location.state;
    return (
        <>
        <Link to='/' className='back'>
            <i class="fa-solid fa-arrow-left"></i>
        </Link>
        <div className='more-details'>
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="text">
                <h3 className='title'>{title}</h3>
                <div className="calories"><span style={{fontWeight:'600'}}>calories:</span> {calories}</div>

                <ol>
                {
                    ingredients.map((ingred,index)=>(
                        <li key={index}> <span>{index+1}.</span>{ingred.text}</li>
                    ))
                }
                </ol>
            </div>
        </div>
        </>
    )
}

export default MoreDetails
