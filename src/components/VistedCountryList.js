const VisitedCountryList = ({visitedCountries}) => {

    const displayVisitedCountries = visitedCountries.map ((visitedCountry,id)=> (
    <li key = {id}>{visitedCountry.name.common}{visitedCountry.flag}</li>))

    return (
     <>
      <h2>VisitedCountries</h2>
      <ul>{displayVisitedCountries}</ul>
     
     </>

    );
}
 
export default VisitedCountryList;