import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';

const CountryContainer = () => {

    const [Countries, setCountries] = useState ("");
    // const [visitedCountries,setVisitedCountries] = useState ([]);

    const LoadCountriesData = async() => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        // setCountries(data);
       console.log(data)
    }

    useEffect (() =>{
        LoadCountriesData();

     } , []);


    return ( 
         <>
         
         {Countries ?<CountryList Countries = {Countries} /> : <p>loading countries ..</p> }
         </>

     );
}
 
export default CountryContainer;