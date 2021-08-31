import React from 'react';

const FilmsLatestCard = ({ ...props }) => {
    return (
        <>
            <a className="films-latest__card" href={props.link}>
                <div className="films-latest__card-wrapper">
                    <img className="films-latest__card-img" src={props.imgPath} alt={props.alt} />
                    <span className="films-latest__hover-text">{props.text}
                    </span>
                </div>
                <span className="films-latest__card-text">{props.title}</span>
            </a>
        </>
    );
};

export default FilmsLatestCard;