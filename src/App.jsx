import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import AllPosts from './components/AllPosts';
import AllUsers from './components/AllUsers';
import AllTodos from './components/AllTodos';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className='w-11/12 mx-auto'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Posts" {...a11yProps(0)} />
        <Tab label="Users" {...a11yProps(1)} />
        <Tab label="Todos" {...a11yProps(2)} />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        <AllPosts></AllPosts>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AllUsers></AllUsers>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AllTodos></AllTodos>
      </CustomTabPanel>
    </Box>
  );
}



CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};