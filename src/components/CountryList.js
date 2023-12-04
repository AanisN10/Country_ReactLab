import CountryComponent from "./CountryComponent";

const CountryList = ({countries, onHandleCheckBox}) => {
//  console.log(countries)
    const displayCountries = countries.map((country,id) => (
    <CountryComponent country = {country} key = {id} onHandleCheckBox= {onHandleCheckBox} /> )
         
    )
//  console.log(displayCountries)

        
        return ( 

            <ul>{displayCountries}</ul>

    
    
         );
     
}
 
export default CountryList;