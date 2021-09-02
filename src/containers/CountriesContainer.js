import React, {useState} from 'react';
import '../App.css';
import CountriesList from '../components/CountriesList';
import DisplayCountry from '../components/DisplayCountry';
import FavoriteCountries from '../components/FavoriteCountries';


const CountriesContainer = ({countries}) => {

    const [selectedCountry, setSelectedCountry] = useState(null);

    if (selectedCountry){
        console.log(selectedCountry);
    }

    const onCountryClick = function(country){
        setSelectedCountry(country);
    }

    return (
        <>
            <div id="containers">
                <CountriesList countries={countries} onCountryClick={onCountryClick} />
                <hr/>

                {selectedCountry ? <DisplayCountry country={selectedCountry} /> :null}

                <FavoriteCountries/>
            </div>
        </>
    )
}

export default CountriesContainer;