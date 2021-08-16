import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const Panel = ({
    inputValue,
    handleInput,
    selectValue,
    handleSelect,
    handleClear,
}) => {
    return (
        <div className='panel'>
            <label className='panel__label'>
                <FontAwesomeIcon
                    className='panel__icon panel__icon--search'
                    icon={faSearch}
                />
                <input
                    type='text'
                    className='panel__input'
                    value={inputValue}
                    onChange={handleInput}
                    placeholder='Search for a country...'
                />
                <FontAwesomeIcon
                    className={
                        inputValue.length
                            ? 'panel__icon panel__icon--clear active'
                            : 'panel__icon panel__icon--clear'
                    }
                    icon={faTimes}
                    onClick={handleClear}
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
