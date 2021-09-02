import React from 'react';

const Country = ({country, onCountryClick}) => {

    const handleClick = function(){
        onCountryClick(country)
    }

    return (
        <>
        <h3 onClick={handleClick}>{country.name}</h3>
        {/* <img src={country.flag}>Country flag</img>         */}
        </>
    )
}

export default Country;