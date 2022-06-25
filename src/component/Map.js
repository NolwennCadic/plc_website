import React from 'react'
import GoogleMapReact from 'google-map-react';

export const Map = ({ location, zoomLevel }) => (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'plc-website-352121' }}//Need to enter a key
            defaultCenter={location}
            defaultZoom={zoomLevel}
        >
            {/* <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          /> */}
        </GoogleMapReact>
    </div>
)
