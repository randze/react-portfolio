import React from 'react';

function Card( props ) {
    return (
        <div className="card col-sm-6 col-lg-4 text-center">
            <div className="card-header">
                <p className="card-text">{props.name}</p>
            </div>
            <img src={props.img} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <a href={props.github} rel="noopener">{props.name} <i className="fab fa-github"></i></a>
                <br />
                <a href={props.site} rel="noopener">Site <i className="fas fa-globe"></i></a>
            </div>
        </div>
    )
}

export default Card;