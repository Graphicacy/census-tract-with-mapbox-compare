import React, { useRef, useEffect } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import { COLORS, LAYER_PROPERTIES, LINE_PAINT, BEFORE_ID } from '../../../constants';
import { makeStyles } from '@material-ui/core/styles';
import Compare from 'mapbox-gl-compare';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: '100%',
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
  },
  yearRangeContainer: {
    position: 'absolute',
    top: 30,
    width: '123px',
    height: '30px',
    padding: '1px 8px 3px 15px',
    backgroundColor: 'rgb(9, 69, 148, .3)',
    fontSize: '20px',
    fontWeight: 'bold',
    color: COLORS.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
}));

const Map = ({ state, setState, activeToggle, _onViewportChange, mapboxRef, onMouseMove }) => {
  const classes = useStyles();
  const beforeMap = useRef(null);
  const mapboxCompareRef = useRef(null);

  useEffect(() => {
    const { offsetWidth, offsetHeight } = beforeMap.current;
    const compare = new Compare(mapboxRef.current.getMap(), mapboxCompareRef.current.getMap(), '#comparison-container');
    setState((prevState) => {
      return {
        ...prevState,
        width: offsetWidth,
        height: offsetHeight,
      };
    });
    // console.log(mapboxRef.current.getMap().style)
    return () => compare.remove();
  }, [mapboxRef, setState]);

  return (
    <div id="comparison-container" className={classes.container}>
      <div id="before" className={classes.map} ref={beforeMap}>
        <div className={classes.yearRangeContainer} style={{ left: 0 }}>
          2008 - 2012
        </div>
        <ReactMapGL
          {...state.viewport}
          ref={mapboxCompareRef}
          width="100%"
          height="100%"
          mapStyle={LAYER_PROPERTIES.style}
          onViewportChange={_onViewportChange}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <Source id={LAYER_PROPERTIES.name} type="vector" url={LAYER_PROPERTIES.source} />
          <Layer
            beforeId={BEFORE_ID}
            type="fill"
            id="fill_layer"
            filter={['has', activeToggle.properties[0]]}
            source={LAYER_PROPERTIES.name}
            source-layer={LAYER_PROPERTIES.name}
            paint={activeToggle.fillColorPaints[0]}
          />
          <Layer type="line" source={LAYER_PROPERTIES.name} source-layer={LAYER_PROPERTIES.name} paint={LINE_PAINT} />
        </ReactMapGL>
      </div>
      <div id="after" className={classes.map}>
        <div className={classes.yearRangeContainer} style={{ right: 0, zIndex: 0 }}>
          2013 - 2017
        </div>
        <ReactMapGL
          {...state.viewport}
          ref={mapboxRef}
          width="100%"
          height="100%"
          onMouseMove={onMouseMove}
          mapStyle={LAYER_PROPERTIES.style}
          onViewportChange={_onViewportChange}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <Source id={LAYER_PROPERTIES.name} type="vector" url={LAYER_PROPERTIES.source} />
          <Layer
            beforeId={BEFORE_ID}
            type="fill"
            id="fill_layer"
            filter={['has', activeToggle.properties[1]]}
            source={LAYER_PROPERTIES.name}
            source-layer={LAYER_PROPERTIES.name}
            paint={activeToggle.fillColorPaints[1]}
          />
          <Layer type="line" source={LAYER_PROPERTIES.name} source-layer={LAYER_PROPERTIES.name} paint={LINE_PAINT} />
        </ReactMapGL>
      </div>
    </div>
  );
};

export default Map;
