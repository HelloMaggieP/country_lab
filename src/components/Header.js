import React from 'react';

const Header = ({totalPopulation}) => {
    return (
        <>
            <h1>Countries Of The World!</h1>
            <h3>World Population: {totalPopulation}</h3>
        </>
    )
}

export default Header;