import React, { createContext, useEffect, useState } from 'react';
import request from '../helpers/request';

export const AppContext = createContext(null);

const GlobalStore = ({ children }) => {
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [countries, setCountries] = useState([]);

    const fetchData = async () => {
        const { data } = await request.get('/all');

        setCountries(data);
        setIsDataLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppContext.Provider
            value={{
                isDataLoading,
                countries,
                setCountries,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default GlobalStore;
