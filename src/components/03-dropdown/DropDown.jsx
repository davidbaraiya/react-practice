import React, { useEffect, useState } from 'react';

const countries = [
  {
    name: 'india',
    value: 'IND',
    states: ['delhi', 'kolkata', 'mumbai']
  },
  {
    name: 'pakistan',
    value: 'PAK',
    states: ['lahore', 'karachi']
  },
  {
    name: 'australia',
    value: 'AUS',
    states: ['sydney', 'melbourne', 'perth']
  }
];

function CountryList() {
  const [selectedCountry, setSelectedCountry] = useState('IND');
  const [selectedStates, setSelectedStates] = useState(countries[0].states);

  const handleCountryChange = (event) => {
    const selectedCountryValue = event.target.value;
    const country = countries.find((c) => c.value === selectedCountryValue);

    console.log(country);

    setSelectedCountry(selectedCountryValue);
    setSelectedStates(country ? country.states : []);
  }


  return (
    <div>
      <h1>List of Countries</h1>
      <div>
        <label>Select Country:</label>
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select</option>
          {countries.map((country, index) => (
            <option key={index} value={country.value}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      { 
        <div>
          <label>Select State:</label>
          <select>
            {selectedStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      }
    </div>
  );
}

export default CountryList;
