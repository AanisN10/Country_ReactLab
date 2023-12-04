const CountryComponent = ({country,onHandleCheckBox}) => {

    const onCheckBoxClick = () => {
        // console.log(country)
        onHandleCheckBox(country)
    }



return (
       
       <>
       <li>
        <b>Country:</b>{country.name.common} {country.flag}
        <input type="checkbox" onChange={onCheckBoxClick}></input>
       </li>
       </>

)

}
 
export default CountryComponent;