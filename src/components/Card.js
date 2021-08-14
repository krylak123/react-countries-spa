import React, { areEqual } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ flag, name, population, region, capital, alpha3Code }) => {
    return (
        <Link to={`/country/${alpha3Code}`} className='card__wrap'>
            <article className='card'>
                <div className='card__image-wrap'>
                    <img
                        src={flag}
                        alt='country flag'
                        className='card__image'
                    />
                </div>
                <div className='card__details-wrap'>
                    <h2 className='card__title'>{name}</h2>
                    <p className='card__detail'>
                        Population:
                        <span className='card__detail-span'>{population}</span>
                    </p>
                    <p className='card__detail'>
                        Region:
                        <span className='card__detail-span'>{region}</span>
                    </p>
                    <p className='card__detail'>
                        Capital:
                        <span className='card__detail-span'>{capital}</span>
                    </p>
                </div>
            </article>
        </Link>
    );
};

export default React.memo(Card, areEqual);
