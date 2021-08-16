import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Panel = ({ inputValue, handleInput, selectValue, handleSelect }) => {
    return (
        <div className='panel'>
            <label className='panel__label'>
                <FontAwesomeIcon className='panel__icon' icon={faSearch} />
                <input
                    type='text'
                    className='panel__input'
                    value={inputValue}
                    onChange={handleInput}
                    placeholder='Search for a country...'
                />
            </label>

            <select
                name='region'
                value={selectValue}
                onChange={handleSelect}
                className='panel__select'
            >
                <option className='panel__option' value='' hidden>
                    Filter by Region
                </option>
                <option className='panel__option' value=''>
                    All
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
    );
};

export default Panel;
