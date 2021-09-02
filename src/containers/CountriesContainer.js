import React from 'react';
import CountryList from '../components/CountriesList';
import DisplayCountry from '../components/DisplayCountry';
import FavoriteCountries from '../components/FavoriteCountries';


const CountriesContainer = () => {
    return (
        <>
            <p>This is the CountriesContainer</p>
            <CountryList/>
            <DisplayCountry/>
            <FavoriteCountries/>
        </>
    )
}

export default CountriesContainer;