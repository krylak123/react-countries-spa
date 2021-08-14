import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../store/GlobalStore';

import Card from '../components/Card';

const StartPage = (props) => {
    const { countries } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');
    const [selectFilter, setSelectFilter] = useState('');

    const handleSearchValue = (e) => {
        const value = e.target.value;

        setSearchValue(value);
    };

    const handleSelectFilter = (e) => {
        const filter = e.target.value;

        setSelectFilter(filter);
    };

    const countriesMap = countries.map((country) => (
        <Card key={country.name} {...country} />
    ));

    return (
        <main className='content'>
            <div className='container content__container'>
                <div className='panel'>
                    <label className='panel__label'>
                        <FontAwesomeIcon
                            className='panel__icon'
                            icon={faSearch}
                        />
                        <input
                            type='text'
                            className='panel__input'
                            value={searchValue}
                            onChange={handleSearchValue}
                            placeholder='Search for a country...'
                        />
                    </label>

                    <select
                        name='region'
                        value={selectFilter}
                        onChange={handleSelectFilter}
                        className='panel__select'
                    >
                        <option className='panel__option' value='' hidden>
                            Filter by Region
                        </option>
                        <option className='panel__option' value='Africa'>
                            Africa
                        </option>
                        <option className='panel__option' value='Americas'>
                            America
                        </option>
                        <option className='panel__option' value='Asia'>
                            Asia
                        </option>
                        <option className='panel__option' value='Europe'>
                            Europe
                        </option>
                        <option className='panel__option' value='Oceania'>
                            Oceania
                        </option>
                    </select>
                </div>
                <section className='results'>{countriesMap}</section>
            </div>
        </main>
    );
};

export default StartPage;
