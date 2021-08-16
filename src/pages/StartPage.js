import React, { useContext, useState } from 'react';
import { AppContext } from '../store/GlobalStore';

import Card from '../components/Card';
import Panel from '../components/Panel';

const StartPage = (props) => {
    const { isDataLoading, countries } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');
    let countriesList = countries;

    const handleSearchValue = (e) => {
        const value = e.target.value;

        setSearchValue(value);
    };

    const handleSelectedFilter = (e) => {
        const filter = e.target.value;

        setSelectedFilter(filter);
    };

    const handleClearInput = () => {
        setSearchValue('');
    };

    if (selectedFilter === 'Africa') {
        countriesList = countriesList.filter(
            (country) => country.region === selectedFilter
        );
    } else if (selectedFilter === 'Americas') {
        countriesList = countriesList.filter(
            (country) => country.region === selectedFilter
        );
    } else if (selectedFilter === 'Asia') {
        countriesList = countriesList.filter(
            (country) => country.region === selectedFilter
        );
    } else if (selectedFilter === 'Europe') {
        countriesList = countriesList.filter(
            (country) => country.region === selectedFilter
        );
    } else if (selectedFilter === 'Oceania') {
        countriesList = countriesList.filter(
            (country) => country.region === selectedFilter
        );
    }

    if (searchValue.length > 0) {
        countriesList = countriesList.filter(
            (country) =>
                country.name.toLowerCase().match(searchValue.toLowerCase()) ||
                country.capital.toLowerCase().match(searchValue.toLowerCase())
        );
    }

    const countriesMap = countriesList.map((country) => (
        <Card key={country.name} {...country} />
    ));

    return (
        <main className='content'>
            <div className='container content__container'>
                <Panel
                    inputValue={searchValue}
                    handleInput={handleSearchValue}
                    selectValue={selectedFilter}
                    handleSelect={handleSelectedFilter}
                    handleClear={handleClearInput}
                />
                {isDataLoading ? (
                    <p>loading...</p>
                ) : (
                    <section className='results'>{countriesMap}</section>
                )}
            </div>
        </main>
    );
};

export default StartPage;
