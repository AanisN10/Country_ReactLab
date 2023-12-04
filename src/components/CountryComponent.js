const CountryComponent = ({country,onHandleCheckBox}) => {


    //  logic when a change onchange eventListener occurs i.e checkbox gets clicked, it will trigger a callback function
    // which internally triggers a callback handle function 
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