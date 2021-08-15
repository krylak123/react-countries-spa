import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../store/GlobalStore';

const DetailPage = (props) => {
    const { isDataLoading, countries } = useContext(AppContext);

    let domains = [];
    let currencies = [];
    let languages = [];
    let borders = [];

    const currentCountry = countries.filter(
        (country) => country.alpha3Code === props.match.params.code
    );

    if (!isDataLoading) {
        domains = currentCountry[0].topLevelDomain.join(`,`);

        currencies = currentCountry[0].currencies
            .map((item) => `${item.name}(${item.symbol})`)
            .join(', ');

        languages = currentCountry[0].languages
            .map((item) => item.name)
            .join(', ');

        borders = currentCountry[0].borders.map((border) => (
            <Link
                to={`/country/${border}`}
                key={border}
                className='detail__btn'
            >
                {border}
            </Link>
        ));
    }

    return (
        <main className='content'>
            <div className='container content__container'>
                <Link to='/' className='detail__btn detail__btn--back'>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back
                </Link>
                {isDataLoading ? (
                    <p>loading...</p>
                ) : (
                    <article className='details-wrap'>
                        <div className='details-wrap__img'>
                            <img
                                src={currentCountry[0].flag}
                                alt='country flag'
                                className='detail__img'
                            />
                        </div>
                        <div className='details-wrap__detail detail'>
                            <h2 className='detail__name'>
                                {currentCountry[0].name}
                            </h2>
                            <div className='detail__content-wrap'>
                                <p className='detail__info'>
                                    Native Name:
                                    <span className='detail__info-span'>
                                        {currentCountry[0].nativeName}
                                    </span>
                                </p>
                                <p className='detail__info'>
                                    Population:
                                    <span className='detail__info-span'>
                                        {currentCountry[0].population}
                                    </span>
                                </p>
                                <p className='detail__info'>
                                    Region:
                                    <span className='detail__info-span'>
                                        {currentCountry[0].region}
                                    </span>
                                </p>
                                <p className='detail__info'>
                                    Sub Region:
                                    <span className='detail__info-span'>
                                        {currentCountry[0].subregion.length
                                            ? currentCountry[0].subregion
                                            : "Doesn't have"}
                                    </span>
                                </p>
                                <p className='detail__info'>
                                    Capital:
                                    <span className='detail__info-span'>
                                        {currentCountry[0].capital.length
                                            ? currentCountry[0].capital
                                            : "Doesn't have"}
                                    </span>
                                </p>
                            </div>
                            <div className='detail__content-wrap'>
                                <p className='detail__info'>
                                    Top Level Domain:
                                    <span className='detail__info-span'>
                                        {domains}
                                    </span>
                                </p>
                                <p className='detail__info'>
                                    Currencies:
                                    <span className='detail__info-span'>
                                        {currencies}
                                    </span>
                                </p>
                                <p className='detail__info'>
                                    Languages:
                                    <span className='detail__info-span'>
                                        {languages}
                                    </span>
                                </p>
                            </div>
                            <div className='detail__border-wrap'>
                                <h3 className='detail__border-title'>
                                    Border Countries:
                                </h3>
                                {borders.length ? borders : "Doesn't have"}
                            </div>
                        </div>
                    </article>
                )}
            </div>
        </main>
    );
};

export default DetailPage;
