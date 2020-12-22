import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  COLORS,
  PREVIOUS_DATA_PROPERTY,
  DATA_PROPERTY,
  DOLLAR_FORMATTER,
  PERCENT_CHANGE_PROPERTY,
  PERCENT_FORMATTER,
} from '../../../constants';

const useStyles = makeStyles((theme) => ({
  tooltip: {
    position: 'absolute',
    margin: '8px',
    fontSize: '18px',
    zIndex: '9',
    pointerEvents: 'none',
    maxWidth: (props) => props.tooltipWidth,
    padding: '10px',
    opacity: '0.9',
    borderRadius: '5px',
    boxShadow: '1px 3px 15px 0 rgba(0, 0, 0, 0.49)',
    backgroundColor: '#2e2e2e',
  },
  header: {
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 10px)',
    color: COLORS.white,
    padding: 5,
  },
  topContainer: {
    '& .name': {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    paddingBottom: '16.5px',
    borderBottom: `solid 1px ${COLORS.white}`,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  metricsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  yearContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
  },
  percentChangeContainer: {
    fontSize: '32px',
    width: '107px',
    height: '43px',
    margin: '1px 0 0',
    fontWeight: 'bold',
    borderRadius: '5px',
    textAlign: 'center',
  },
  incomeLabel: {
    margin: '10px 0',
  },
}));

const Tooltip = ({ activeFeature, x, y, width, height }) => {
  const tooltipWidth = 335;
  const tooltipHeight = 195;
  const buffer = 10;
  const classes = useStyles({ tooltipWidth, tooltipHeight });

  if (!activeFeature) return null;

  // If the tooltip is going over the edge of the right side of the screen
  if (tooltipWidth + x > width - buffer) {
    x -= tooltipWidth + 40;
  }

  // If the tooltip is going over the edge of the bottom side of the screen
  if (tooltipHeight + y > height - buffer) {
    y -= tooltipHeight;
  }

  const percentChange = +activeFeature.properties[PERCENT_CHANGE_PROPERTY];

  // Get the percent change background color
  let backgroundColor = COLORS.neutral;
  let color = COLORS.darkGray;
  if (percentChange > 0.009) {
    backgroundColor = COLORS.blue;
    color = COLORS.white;
  } else if (percentChange < -0.009) {
    backgroundColor = COLORS.red;
    color = COLORS.white;
  }

  return (
    <div className={classes.tooltip} style={{ left: x, top: y }}>
      <div className={classes.header}>
        <div className={classes.topContainer}>
          <div className="name">{activeFeature.properties.name}</div>
        </div>
        <div className={classes.bottomContainer}>
          <div className={classes.incomeLabel}>Median Household Income</div>
          <div className={classes.metricsContainer}>
            <div className={classes.yearContainer}>
              <div>
                2008-2012: <b>{DOLLAR_FORMATTER(activeFeature.properties[PREVIOUS_DATA_PROPERTY])}</b>
              </div>
              <div>
                2013-2017: <b>{DOLLAR_FORMATTER(activeFeature.properties[DATA_PROPERTY])}</b>
              </div>
            </div>
            <div className={classes.percentChangeContainer} style={{ backgroundColor, color }}>
              {`${percentChange >= 0 ? '+' : ''}${PERCENT_FORMATTER(percentChange)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
