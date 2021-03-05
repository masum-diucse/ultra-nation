import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';

function App() {
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
    .catch(err=>console.log("error",err));
  },[]);
  
  const [countryList,setCountryList]=useState([]);
  const handleAddCountry=(country)=>{
    const newCountryList=[...countryList,country];
    setCountryList(newCountryList);
  }
  return (
    <div className="country-container">
      <h1>Added Country: {countryList.length}</h1>
      <div className="selected-country-container">
        {
        countryList.map(country=> <img src={country.flag}></img>)
        }
      </div>
      {
        countries.map(country=><Country 
          key={country.alpha3Code}
          country={country}
          handleAddCountry={handleAddCountry}
          ></Country>)
      }
    </div>
  );
}

export default App;
