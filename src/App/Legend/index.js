import React from 'react';
import { COLORS, PERCENT_CHANGE_PROPERTY } from '../../constants';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  legend: {
    flex: '0 0 420px',
    display: 'flex',
    color: COLORS.darkGray,
    fontSize: '14px',
    '& h4': {
      marginBlockStart: 0,
      marginBlockEnd: '.25rem',
    },
    '& h5': {
      marginBlockStart: 0,
      marginBlockEnd: '.5rem',
      fontStyle: 'italic',
    },
    '& :not(:last-child)': {
      paddingBottom: '.25rem',
    },
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  legendItem: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 60px',
    '& .block': {
      width: '100%',
      height: '17px',
    },
    textAlign: 'end',
  },
}));

const Legend = ({ activeToggle }) => {
  const width = 500;
  const classes = useStyles({ width });

  return (
    <div className={classes.legend}>
      <div className={classes.innerContainer}>
        {activeToggle.legendColors.map(([color, value], idx) => {
          return (
            <div
              className={classes.legendItem}
              key={`legend-item-for-${color}`}
              // style={{ width: width / activeToggle.legendColors.length }}
            >
              <div className="block" style={{ backgroundColor: color }} />
              <div>{`${!idx ? '<' : ''}${
                idx === activeToggle.legendColors.length - 1 && activeToggle.properties[0] === PERCENT_CHANGE_PROPERTY ? '>' : ''
              }${activeToggle.legendFormatter(value)}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Legend;
