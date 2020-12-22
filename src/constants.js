import { format } from 'd3-format';
import { schemeBlues, schemeRdYlBu } from 'd3-scale-chromatic';
import { merge } from 'd3-array';

export const COLORS = {
  darkGray: '#353131',
  white: '#fff',
  black: '#000',
  blue: '#4292c6',
  red: '#d73027',
  neutral: '#ffffbf',
};

export const DEFAULT_VIEWPORT = {
  latitude: 41.5096879,
  longitude: -73.0447974,
  zoom: 8,
  bearing: 0,
  pitch: 0,
};

export const DOLLAR_FORMATTER = format('$,.0f');
export const PERCENT_FORMATTER = format(',.0%');
const SI_DOLLAR_FORMATTER = format('$.3s');

export const DATA_PROPERTY = 'total_est';
export const PREVIOUS_DATA_PROPERTY = 'previous_total_est';
export const PERCENT_CHANGE_PROPERTY = 'percent_change';

export const LAYER_PROPERTIES = {
  style: 'mapbox://styles/graphicacy/ckiqeeqtl0sgz18qv6xnslftp',
  name: 'tractsclippedbystatewithalldata',
  source: 'mapbox://graphicacy.1a7bxyc8',
};

// Color the census tracts based on the 7 Jenks bins from CartoDB SQL function
const incomeBins = [35419, 54875, 74271, 96503, 125157, 167104, 266908];
const percentChangeBins = [-0.161, -0.11, -0.05, 0, 0.05, 0.11, 0.161];
const INCOME_LEGEND_COLORS = schemeBlues[7].map((d, i) => [d, incomeBins[i]]);
const PERCENT_CHANGE_LEGEND_COLORS = schemeRdYlBu[7].map((d, i) => [d, percentChangeBins[i]]);
const FILL_OPACITY = 0.9;

export const STATES = [
  {
    label: 'Total Income',
    id: 'total_income',
    fillColorPaints: [
      {
        'fill-color': ['step', ['get', DATA_PROPERTY]].concat(merge(INCOME_LEGEND_COLORS)).concat('#fff'),
        'fill-opacity': FILL_OPACITY,
      },
      {
        'fill-color': ['step', ['get', PREVIOUS_DATA_PROPERTY]].concat(merge(INCOME_LEGEND_COLORS)).concat('#fff'),
        'fill-opacity': FILL_OPACITY,
      },
    ],
    legendColors: INCOME_LEGEND_COLORS,
    formatter: DOLLAR_FORMATTER,
    legendFormatter: SI_DOLLAR_FORMATTER,
    properties: [PREVIOUS_DATA_PROPERTY, DATA_PROPERTY],
    isActive: true,
  },
  {
    label: '% Change',
    id: 'percent_change',
    fillColorPaints: [
      {
        'fill-color': ['step', ['get', PERCENT_CHANGE_PROPERTY]]
          .concat(merge(PERCENT_CHANGE_LEGEND_COLORS))
          .concat(PERCENT_CHANGE_LEGEND_COLORS[PERCENT_CHANGE_LEGEND_COLORS.length - 1][0]),
        'fill-opacity': FILL_OPACITY,
      },
    ],
    legendColors: PERCENT_CHANGE_LEGEND_COLORS,
    formatter: PERCENT_FORMATTER,
    legendFormatter: PERCENT_FORMATTER,
    properties: [PERCENT_CHANGE_PROPERTY],
    isActive: false,
  },
];

export const LINE_PAINT = {
  'line-width': ['case', ['boolean', ['feature-state', 'hover'], false], 3, 0.5],
  'line-color': ['case', ['boolean', ['feature-state', 'hover'], false], '#000', '#969090'],
  'line-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0],
};

export const BEFORE_ID = 'bridge-rail';
