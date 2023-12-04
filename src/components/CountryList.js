import CountryComponent from "./CountryComponent";

const CountryList = ({countries, onHandleCheckBox}) => {
//  console.log(countries)
    const displayCountries = countries.map((country,id) => (
    <CountryComponent country = {country} key = {id} onHandleCheckBox= {onHandleCheckBox} /> )
         
    )
//  console.log(displayCountries)

        
        return ( 

            <div className="country-list">
            <h3> Country I need to explore....</h3>
            <ul>{displayCountries}</ul>
            </div>
    
         );
     
}
 
export default CountryList;