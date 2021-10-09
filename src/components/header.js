import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './header.css'

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function NavTabs() {
  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box className="head">
          <Tabs className="tab1">
              <img src="https://imprasna.github.io/assets/img/logo.png" />
          </Tabs>

      <Tabs className="tab2" value={value} onChange={handleChange} aria-label="nav tabs">
        <LinkTab label="Home" href="/page-one" />
        <LinkTab label="About" href="/page-two" />
        <LinkTab label="Contact" href="/page-three" />
      </Tabs>
    </Box>
  );
}

export default NavTabs;