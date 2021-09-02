import React from 'react';

const DisplayCountry = ({country}) => {

    const languageList = country.languages.map((language) => {
        return language.name
    })

    console.log(languageList);


    // const displayLanguages = function(languageList){
    //     for (language of languageList){
    //         return language
    //     }
    // }

    return (
        <>
            <h3>Name: {country.name}</h3>
            <h3>Capital: {country.capital}</h3>
            <h3>Languages: </h3> 
            {/* {displayLanguages} */}
        </>
    )
}

export default DisplayCountry;