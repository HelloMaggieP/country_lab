import React, {useState, useEffect} from 'react';
import '../App.css';
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

    const countriesPopulation = countries.map((country) => {
        return country.population
    })

    let totalPopulation = countriesPopulation.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    }, 0)





    return(
        <>
            <Header totalPopulation={totalPopulation}/>
            <hr/>
            <CountriesContainer countries={countries} />
        </>    
    )
}

export default AppContainer