// Importing modules
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

import "./App.css";

function App() {
	//radio
    const [value, setValue] = React.useState(''); 
    const handleChange = (event) => {
      setValue(event.target.value);
    };

	const handleSubmit = (event) => {
		event.preventDefault();
	  }
    const [segment, setAge] = React.useState('');

    

    return (
		<div className="App">
			<header className="App-header">
			<React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
      <Box sx={{ bgcolor: '#dddddd', height: '100vh' }}>

	    <h3>Text Generator</h3>
      
    
    <div>
			<FormControl sx={{ minWidth: 200 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Choose a category</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={value}
          onChange={handleChange}
          >
          <FormControlLabel value="Messages" control={<Radio />} label="Messages" />
          <FormControlLabel value="Email" control={<Radio />} label="Email" />
		      <FormControlLabel value="In-App" control={<Radio />} label="In-App Messages" />
		      <FormControlLabel value="Notifications" control={<Radio />} label="Notifications" />
        </RadioGroup>
        
	    <FormLabel id="textarea">Write a Topic</FormLabel>
      <Box sx={{ minWidth: 600,bgcolor: '#dddddd', height: '20vh' }}>
	    <TextField 
            id="outlined-multiline-static"
            label="Topic"
            multiline
            rows={2}
          />
          </Box>
    </FormControl>

    <Box sx={{ minWidth: 200,bgcolor: '#dddddd', height: '10vh' }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">Segment</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={segment}
          label="Segment"
          onChange={handleChange}
          >
          <MenuItem value={10}>Older Women</MenuItem>
          <MenuItem value={20}>Diabetic Patients</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>

  <div>
    <FormLabel id="textarea">Other Details</FormLabel>
    <div>
	    <TextField
        id="outlined-multiline-static"
        label="Other"
        multiline
        rows={2}
      />
    </div>
  </div>
  <Box sx={{ minWidth: 200,bgcolor: '#dddddd', height: '10vh' }}>
  <div style={{display: 'flex', justifyContent:'center'}}>
    <RadioGroup
      row
      aria-labelledby="tone"
      name="tone-radio"
    >
      <FormControlLabel value="Positive" control={<Radio />} label="Positive" />
      <FormControlLabel value="Negative" control={<Radio />} label="Negative" />
    </RadioGroup>
  </div>
</Box>
	<div>
	  <Button variant="contained" color="success">  
      Submit
    </Button> 
	</div>

	</Box>
  </Container>
  </React.Fragment>
	</header>
	</div>
	);
}

export default App;
