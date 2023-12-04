
const VisitedCountryList = ({visitedCountries}) => {

    const displayVisitedCountries = visitedCountries.map ((visitedCountry,id)=> (
    <li key = {id}>{visitedCountry.name.common}{visitedCountry.flag}</li>))

    return (
     <div className="visited-country-list">
        <h3>Visited List</h3>
        <ul>{displayVisitedCountries}</ul>
     </div>

    );
}
 
export default VisitedCountryList;