import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Map';
import PercentChangeMap from './PercentChangeMap';
import Tooltip from './Tooltip';
import { LAYER_PROPERTIES, PERCENT_CHANGE_PROPERTY } from '../../constants';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    display: 'flex',
    position: 'relative',
    flex: '1 1 auto',
  },
}));

const MapContainer = ({ state, setState }) => {
  const classes = useStyles();
  const mapboxRef = useRef(null);
  const activeToggle = state.toggles.find((toggle) => toggle.isActive);

  const _onViewportChange = (viewport) =>
    setState((prevState) => {
      return {
        ...prevState,
        viewport,
      };
    });

  const onMouseLeave = () => {
    const map = mapboxRef.current.getMap();
    map.removeFeatureState({
      source: LAYER_PROPERTIES.name,
      sourceLayer: LAYER_PROPERTIES.name,
    });
    setState((prevState) => ({
      ...prevState,
      activeFeature: null,
    }));
  };

  const onMouseMove = (event) => {
    const {
      srcEvent: { offsetX, offsetY },
    } = event;
    const point = [offsetX, offsetY];
    const map = mapboxRef.current.getMap();
    let feature;
    try {
      feature = mapboxRef.current.getMap().queryRenderedFeatures(point, { layers: ['fill_layer'] })[0];
    } catch (err) {
      return;
    }

    if (feature) {
      if (state.activeFeature) {
        map.removeFeatureState({
          source: LAYER_PROPERTIES.name,
          sourceLayer: LAYER_PROPERTIES.name,
        });
      }
      map.setFeatureState(
        {
          source: LAYER_PROPERTIES.name,
          sourceLayer: LAYER_PROPERTIES.name,
          id: feature.id,
        },
        {
          hover: true,
        },
      );
    }

    setState((prevState) => ({
      ...prevState,
      activeFeature: feature,
      x: offsetX,
      y: offsetY,
    }));
  };

  return (
    <div className={classes.mapContainer} onMouseOut={onMouseLeave}>
      {activeToggle.properties[0] === PERCENT_CHANGE_PROPERTY ? (
        <PercentChangeMap
          state={state}
          setState={setState}
          activeToggle={activeToggle}
          _onViewportChange={_onViewportChange}
          mapboxRef={mapboxRef}
          onMouseMove={onMouseMove}
        />
      ) : (
        <Map
          state={state}
          setState={setState}
          activeToggle={activeToggle}
          _onViewportChange={_onViewportChange}
          mapboxRef={mapboxRef}
          onMouseMove={onMouseMove}
        />
      )}
      <Tooltip {...state} />
    </div>
  );
};

export default MapContainer;
