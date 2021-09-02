import React from 'react';
import Country from './Country';
import '../App.css';


const CountriesList = ({countries, onCountryClick}) => {

    const countryItems = countries.map((country, index) => {
        return <Country country={country} key={index} value={index} onCountryClick={onCountryClick}/>
    })

    return (
        <>
            <div id="country-items">
                {countryItems}
            </div>
        </>
    )
}

export default CountriesList;