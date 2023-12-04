import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import VisitedCountryList from '../components/VistedCountryList';


const CountryContainer = () => {

    const [countries, setCountries] = useState ([]);
    const [visitedCountries,setVisitedCountries] = useState ([]);

    const LoadCountriesData = async() => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
    //    console.log(data)
    }

    useEffect (() =>{
        LoadCountriesData();

     } , []);

    //updating the visitedCountries when checkbox is clicked 
    // spread operator to add/update country to visited list
    // iterate using filter and if the country is in visitedList remove from the countryList

     const handleCheckBox = ((countrySelected) => {
            setVisitedCountries((visitedCountries)=> [...visitedCountries,countrySelected])
     })

     useEffect(() => {

        // logic to remove country thats been visited
        const updatedCountryList = countries.filter((country) => !visitedCountries.includes(country))
        setCountries(updatedCountryList);
        },[visitedCountries])

    return ( 
         <>
         <h2>Display all countries</h2>
         {countries ?<CountryList countries = {countries} onHandleCheckBox = {handleCheckBox}/> : <p>loading countries ..</p> }
        <VisitedCountryList visitedCountries={visitedCountries} />
         </>

     );




    
}
 
export default CountryContainer;