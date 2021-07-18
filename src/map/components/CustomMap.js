import React from 'react';
import PropTypes from 'prop-types'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { MarkerWrapper } from './MarkerWrapper';

/*
* Functional component that makes google Map https://www.npmjs.com/package/google-map-react
* For more detailed documentation see https://react-google-maps-api-docs.netlify.app/#infowindow
*/
export const CustomMap = ({
    addFavorite,
    markerList,
    mapStyle= { height: "80vh", width: "100%" },
    center={ lat: 19.43224, lng: -99.13350
    },
    apiKey = 'AIzaSyAmX-kWiHUQ7W3sUDe3viG2xET1q45-QAQ'
}) => {


  const handleClick = ({latLng},texto) =>{
    const {lat,lng} = latLng;
    addFavorite(texto,lat(),lng());
  }
  
  return (
    <>
      <LoadScript
        googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={mapStyle}
            zoom={13}
            center={center}
          >
            { !!markerList && markerList.map( marker => {
              return <MarkerWrapper key={marker.Name} marker={marker} handleClick={handleClick}/>
            }) }
            
          </GoogleMap>
        
      </LoadScript>
    </>
  )
}


/** Proptypes for the correct functionality */
CustomMap.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  markerList: PropTypes.array.isRequired,
  mapStyle: PropTypes.object,
  center: PropTypes.object,
  apiKey: PropTypes.string
}

