import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
        <div className="card">
            <img src="images/portfolio/ezencinema.jpg" alt="#" />
            <div className="shadow">
                <div className="shadow_sub text-center">
                    <h2>EzenCinema</h2>
                    <h5>Cinema Project</h5>
                    <hr className="contour2" />
                    <Link to="/portfolio/1"> show details</Link>
                </div>
                
            </div>
        </div>
    );
};

export default Card;