import React, { useRef, useEffect } from 'react';
import ReactMapGL, { Layer, Source } from 'react-map-gl';
import { LAYER_PROPERTIES, LINE_PAINT, BEFORE_ID } from '../../../constants';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
  },
}));

const PercentChangeMap = ({ state, setState, activeToggle, _onViewportChange, mapboxRef, onMouseMove }) => {
  const classes = useStyles();
  const mapRef = useRef(null);

  useEffect(() => {
    const { offsetWidth, offsetHeight } = mapRef.current;
    setState((prevState) => {
      return {
        ...prevState,
        width: offsetWidth,
        height: offsetHeight,
      };
    });
  }, [setState]);

  return (
    <div id="percent-change-map">
      <div className={classes.map} ref={mapRef}>
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
            filter={['has', activeToggle.properties[0]]}
            source={LAYER_PROPERTIES.name}
            source-layer={LAYER_PROPERTIES.name}
            paint={activeToggle.fillColorPaints[0]}
          />
          <Layer type="line" source={LAYER_PROPERTIES.name} source-layer={LAYER_PROPERTIES.name} paint={LINE_PAINT} />
        </ReactMapGL>
      </div>
    </div>
  );
};

export default PercentChangeMap;
