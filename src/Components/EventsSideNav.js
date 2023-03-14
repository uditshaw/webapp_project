import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TuneOutlined } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid,Box,Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const Item = styled(Paper)(({ theme }) => ({
   
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
  
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0}>
      <Grid item xs={12} style={{textAlign:"center"}}  >
           
     <h2 style={{alignItems:"left"}}>  <TuneOutlined style={{width:"25px",marginRight:"2px"}}></TuneOutlined>Filters</h2>
      </Grid>
      <Grid item xs={9}>
       
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{boxShadow:"none",width:"20vw"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0,textAlign:"left" }}>
         Status
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Ongoing</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Ongoing" control={<Radio />} label="Ongoing" />
        <FormControlLabel value="Upcoming" control={<Radio />} label="Upcoming" />
        <FormControlLabel value="Past" control={<Radio />} label="Past" />
      </RadioGroup>
    </FormControl>
        </AccordionDetails>
      </Accordion>
      </Grid>
      <Grid item xs={9}>
        
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{boxShadow:"none",width:"20vw"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0,textAlign:"left" }}>
         Department
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        <FormControlLabel value="CSE" control={<Radio />} label="Computer Science" />
        <FormControlLabel value="IT" control={<Radio />} label="IT" />
        <FormControlLabel value="EC" control={<Radio />} label="Electrical" />
      </RadioGroup>
    </FormControl>
        </AccordionDetails>
      </Accordion>
      </Grid>
    </Grid>
  </Box>
    

  );
}
