import React from 'react'

import MapViewDirections from 'react-native-maps-directions'

const Directions = (destination, origin, onReady) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyCtVCUc0lK34koG6M-8butMhhIBeBM1TgU"
    strokeWidth={3}
    strokeColor="#222"
  />
)

export default Directions