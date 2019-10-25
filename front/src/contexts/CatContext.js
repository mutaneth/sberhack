import React, { useState, createContext } from 'react';

export const CatContext = createContext();

const CatContextProvider = (props) => {
const { catActive, setCatActive, children, catStatus, setCatStatus } = props;
    const [activeCatMenu, setActiveCatMenu] = useState('');
    return (
        <CatContext.Provider value={{
            catActive, setCatActive, activeCatMenu, setActiveCatMenu, catStatus, setCatStatus
        }}
        >
            { children }
        </CatContext.Provider>
    );
};
export default CatContextProvider;