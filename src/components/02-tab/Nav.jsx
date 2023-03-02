import  React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Nav = ({getCategory, api}) => {
  const [value, setValue] = useState(0);

  const filterCatName =  [ 'all', ...new Set(api.map((e) => e.category))]

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" className='mb-5'>
        {
          filterCatName.map((item ,i) => {
            return  <Tab label={item} onClick={() => getCategory(item)} key={i} />
          })
        }
      </Tabs>
    );
}

export default Nav;
