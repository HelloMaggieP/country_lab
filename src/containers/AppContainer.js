import React, {useState, useEffect} from 'react';
import CountryList from '../components/CountriesList';
import Header from '../components/Header';
import CountriesContainer from './CountriesContainer';

const AppContainer = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = function(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(countries => setCountries(countries))
        .catch(err => console.error);
    }


    const countryItems = countries.map((country, index) => {
        return <CountriesContainer country={country} key={index}/>
    })

    const countriesPopulation = countries.map((country) => {
        return country.population
    })





    return(
        <>
            <Header />
            <p>This is the AppContainer</p>
            {countryItems}
        </>    
    )
}

export default AppContainer