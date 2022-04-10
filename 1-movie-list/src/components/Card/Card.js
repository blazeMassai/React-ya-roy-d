import React from 'react';

const Card = ({ movie }) => {
    return (
        <div className="card mt-2 border-dark">

            <img src={movie.img.src} className="card-img-top" alt="movie.img.alt" width='200'/>
            <div className="card-body">
                <h2>{ `#${movie.ranking} - ${movie.title} (${movie.year})` }</h2>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <p>{`Distributor: ${movie.distributor}`}</p>
                </li>
                <li className="list-group-item">
                    <p>{`Amount: ${movie.amount}`}</p>
                </li>
            </ul>

        </div>
    );
};


export default Card;