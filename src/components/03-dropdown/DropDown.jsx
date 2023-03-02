import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const countries = [
    {
        name:'india',
        value: 'IND',
        states :[
            'delhi',
            'kolkata',
            'mumbai',
        ]
    },
    {
        name:'pakistan',
        value: 'PAK',
        states :[
            'lahore',
            'karachi',
        ]
    },
    {
        name:'australia',
        value: 'AUS',
        states :[
            'sydeny',
            'melbern',
            'perth',
        ]
    },
];


const DropDown = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const [selectedAge, setSelectedAge] = useState('');

  const handleAgeChange = (event) => {
    setSelectedAge(event.target.value);
  };

  return (
    <div className='container mt-5'>
    <Box sx={{ minWidth: 120 }}>
      <FormControl style={{width: '180px', marginRight:'20px'}}>
        <InputLabel id="country-select-label">Countries</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={selectedCountry}
          label="Countries"
          onChange={handleCountryChange}
        >
        {
            countries.map((country) => (
                <MenuItem key={country.value} value={country.value}>{country.name}</MenuItem>
            ))
        }
        </Select>
      </FormControl>

      <FormControl style={{width: '180px'}}>
        <InputLabel id="age-select-label">Age</InputLabel>
        <Select
          labelId="age-select-label"
          id="age-select"
          value={selectedAge}
          label="Age"
          onChange={handleAgeChange}
        >
         {
            countries.map((country) => (
                <MenuItem key={country.value} value={country.value}>{country.name}</MenuItem>
            ))
        }
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}

export default DropDown;
