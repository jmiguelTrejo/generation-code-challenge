import { Marker } from '@react-google-maps/api';
import React, { memo, useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

/** Functional component that reveive a marker Address and transform to LatLng marker */
export const MarkerWrapper = memo(({marker,handleClick }) => {
    const [state, setState] = useState({
        center:{
            lat: 19.43224,
            lng: -99.13350
      },
      googleKey:'AIzaSyAmX-kWiHUQ7W3sUDe3viG2xET1q45-QAQ'
    })


    const {center,googleKey} = state;
    /** Get object with site results that match the provided address */
    const {loading,data} =useFetch( `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(marker.Address)}&key=${googleKey}`,true );
    /** Set location when the data return from hook */
    useEffect(() => {
        if( !!data ){
            const {status} = data;
            if( status === 'OK' ){
                const {results } = data;
                const {geometry: {location} } =results[0];
                setState({...setState, center:location});
            }
        }
    }, [loading,data]);

    return (
        <>
        { !!data && (
            <Marker
                title={ marker.Name}
                position={center}
                onClick={ (e) => handleClick(e, marker.Name )}
            />
        ) }
        </>
    )
})


