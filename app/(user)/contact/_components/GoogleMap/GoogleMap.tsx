'use client'

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { useState } from 'react';

export default function GoogleMap () {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div style={{height: '100%', width: '100%'}}>
        <Map zoom={16} center={{lat: 51.11044, lng: 17.03099}} gestureHandling={'cooperative'} disableDefaultUI={true} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          <AdvancedMarker ref={markerRef} position={{lat: 51.11044, lng: 17.03099}} onClick={() => setOpenInfo(true)}>
            <Pin background={'#a1461e'} glyphColor={'#d7cfcc'} borderColor={'#a1461e'} scale={1.5} />
          </AdvancedMarker>
          {openInfo && <InfoWindow anchor={marker} onCloseClick={() => setOpenInfo(false)}>
            <div>
              <h2>Welcome to La Fabrica Del Gusto!</h2>
              <p style={{textAlign: 'center', margin: '4px 0'}}>The spirit of Spain in the middle of Wrocław.</p>
              <img src="/contact/fiesta_time.jpg" width={160} style={{ display: 'block', margin: 'auto' }} />
            </div>
          </InfoWindow>}
        </Map>
      </div>
  </APIProvider>
  )
}

// https://www.youtube.com/watch?v=PfZ4oLftItk
// https://visgl.github.io/react-google-maps/
