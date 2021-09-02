import React from 'react';
import Header from '../components/Header';
import CountriesContainer from './CountriesContainer';

const AppContainer = () => {
    return(
        <>
            <Header/>
            <p>This is the AppContainer</p>
            <CountriesContainer/>
        </>    
    )
}

export default AppContainer