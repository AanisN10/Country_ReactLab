const CountryComponent = ({country}) => {

return (
       
       <>

       {/* also need to add checkbox */}
       <p><b>Country:</b>{country.name.common} {country.flag}</p>
       </>

)

}
 
export default CountryComponent;