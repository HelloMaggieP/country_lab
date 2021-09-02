import React from 'react';

const DisplayCountry = ({country}) => {

    const languageList = country.languages.map((language) => {
        return language.name
    })

    // console.log(languages);


    const displayLanguages = function(languageList){
        for (language of languages){
            return language
        }
    }

    return (
        <>
            <h3>Name: {country.name}</h3>
            <h3>Capital: {country.capital}</h3>
            <h3>Languages: {displayLanguages}</h3>
        </>
    )
}

export default DisplayCountry;