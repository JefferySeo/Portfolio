import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    let url = "/portfolio/" + props.id;
    return (
        <div className="card">
            <img src={props.img} alt={props.title} />
            <div className="shadow">
                <div className="shadow_sub text-center">
                    <h2>{props.title}</h2>
                    <h5>{props.subject}</h5>
                    <hr className="contour2" />
                    <Link to={url}> show details</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Card;