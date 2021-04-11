import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './Dashboard.module.scss';

const Dashboard = () => (
  <Paper className={styles.component}>
    <ButtonGroup className={styles.buttonGroup}>
      <Button component={Link} to="/panel/tables">
        Tables
      </Button>
      <Button component={Link} to="/panel/Waiter">
        Waiter
      </Button>
      <Button component={Link} to="/panel/kitchen">
        Kitchen
      </Button>
    </ButtonGroup>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          Today orders
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Total local orders<br/>
          Total online order<br/>
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          Today bookings
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          booking<br/>
          booking<br/>
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          Today events
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          event<br/>
          event<br/>
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Paper>
);

export default Dashboard;
