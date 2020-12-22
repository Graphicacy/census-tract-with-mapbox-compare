import React from 'react';
import graphicacyLogo from '../../assets/images/Graphicacy_logo.svg';
import Legend from '../Legend';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../constants';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    zIndex: '999',
    backgroundColor: '#fff',
    width: 'calc(100% - 50px)',
    padding: '25px 25px 15px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  info: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: '1 1 auto',
    '& > *': {
      '&:not(:last-child)': {
        marginRight: 60,
        marginBottom: 20,
        [theme.breakpoints.down('sm')]: {
          flex: '0 0 100%',
        },
      },
    },
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    color: COLORS.darkGray,
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: 1.3,
    flex: '0 0 340px',
    '& .source': {
      marginTop: '2px',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: 1.36,
      '& a': {
        color: COLORS.blue,
      },
    },
  },
  toggleContainer: {},
  toggleGroup: {
    height: 30,
  },
  toggleBtn: {
    whiteSpace: 'nowrap',
    padding: '0 20px',
    textTransform: 'capitalize',
    '&:first-child': {
      borderRadius: '20px 0 0 20px',
    },
    '&:last-child': {
      borderRadius: '0 20px 20px 0',
    },
  },
  builtByContainer: {
    display: 'flex',
    height: 30,
    paddingBottom: 10,
    '& img': {
      marginLeft: '6px',
      height: 23,
    },
    '& h3': {
      whiteSpace: 'noWrap',
      margin: 0,
    },
    '& a': {
      display: 'block',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0,
      marginTop: 20,
    },
  },
}));

const Header = ({ state, setState }) => {
  const classes = useStyles();
  const activeToggle = state.toggles.find((toggle) => toggle.isActive);
  const changeToggle = (event, newValue) => {
    setState((prevState) => ({
      ...prevState,
      toggles: prevState.toggles.map((toggle) => ({
        ...toggle,
        isActive: toggle.id === newValue,
      })),
    }));
  };

  return (
    <div className={classes.header}>
      <div className={classes.info}>
        <div className={classes.leftContainer}>
          <div>How has Median Household Income changed over time?</div>
          <div className="source">
            Source:{' '}
            <a
              href="http://data.diversitydatakids.org/dataset/19013_1_d-median-household-income--dollar--by-race-ethnicity/resource/c5334c27-3cf0-439b-b8b0-5ff7eb632b57"
              target="_blank"
              rel="noopener noreferrer"
            >
              diversitydatakids.org, ACS
            </a>
          </div>
        </div>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup
            className={classes.toggleGroup}
            value={activeToggle.id}
            exclusive
            onChange={changeToggle}
            aria-label={'toggle'}
          >
            {state.toggles.map((toggle) => {
              return (
                <ToggleButton
                  className={classes.toggleBtn}
                  key={`toggle-button-for-${toggle.id}`}
                  value={toggle.id}
                  aria-label={toggle.label}
                >
                  {toggle.label}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </div>
        <Legend activeToggle={activeToggle} />
      </div>
      <div className={classes.builtByContainer}>
        <div>
          <h3>BUILT BY</h3>
        </div>
        <div>
          <a href="https://graphicacy.com" target="_blank" rel="noopener noreferrer">
            <img src={graphicacyLogo} alt="Large G branding for Graphicacy - a data visualization and design firm." />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
