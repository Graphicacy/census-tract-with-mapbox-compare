import React, { useState } from 'react';
import { DEFAULT_VIEWPORT, STATES } from '../constants';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import MapContainer from './MapContainer';

const useStyles = makeStyles((theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    scrollX: 'none',
  },
}));

const App = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    viewport: DEFAULT_VIEWPORT,
    toggles: STATES,
    activeFeature: null,
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  });

  return (
    <div className={classes.app}>
      <Header state={state} setState={setState} />
      <MapContainer state={state} setState={setState} />
    </div>
  );
};

export default App;
