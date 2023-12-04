import CountryComponent from "./CountryComponent";

const CountryList = ({countries}) => {

    const displayCountries = countries.map ((country,id) => {
        return <CountryComponent country = {country} key = {id} /> ;
    })


        
        return ( 

            <ul>{displayCountries}</ul>
    
    
         );
     
}
 
export default CountryList;