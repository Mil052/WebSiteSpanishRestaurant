'use client'

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { useState } from 'react';

export default function GoogleMap () {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div style={{height: '100%', width: '100%'}}>
        <Map zoom={16} center={{lat: 51.11044, lng: 17.03099}} gestureHandling={'greedy'} disableDefaultUI={true} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          <AdvancedMarker ref={markerRef} position={{lat: 51.11044, lng: 17.03099}} onClick={() => setOpenInfo(true)}>
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
          </AdvancedMarker>
          {openInfo && <InfoWindow anchor={marker} onCloseClick={() => setOpenInfo(false)}>
            <div>
              <h2>Hello everyone!</h2>
              <p>This is an Info Window</p>
              <img src="..." />
            </div>
          </InfoWindow>}
        </Map>
      </div>
  </APIProvider>
  )
}

// https://www.youtube.com/watch?v=PfZ4oLftItk
// https://visgl.github.io/react-google-maps/
