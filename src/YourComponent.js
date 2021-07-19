import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useFetch } from './hooks/useFetch';
import {CustomMap} from './map/components/CustomMap';
import { FavList } from './map/components/FavList';

/*
* Use this component as a launching-pad to build your functionality.
*
*/

export const YourComponent = () => {

  const {data} = useFetch( `store_directory.json` );
  const [state, setState] = useState({
    markerList:[],
    favorites: [],
    openFavorites: false,
    center:{ lat: 19.43224, lng: -99.13350 }, 
    animateFav: 'fav-icon',
    renderFavList: false,
    toasterText: '',
    toasterClass: 'toaster hidden'
  })
  
  const {markerList,favorites,openFavorites,center,animateFav,renderFavList,toasterText,toasterClass} = state;
  /* Load List of Favorite Stores (if exists) in the first render  */
  useEffect(() => {
    const favoriteStoreList = window.localStorage.getItem('favoriteStoreList');
    /* Validate if the localstorage has property  */
    if( favoriteStoreList !== null ){
        const favoriteStoresArray = JSON.parse(favoriteStoreList);
        setState( s => ({
          ...s, 
          favorites: favoriteStoresArray
        }) )
    }
  }, [])

  /* Fill the markerList when the data returns from fetch hook */
  useEffect(() => {
    setState( s => ({
      ...s, 
      markerList: data
    }) )
  }, [data])

  /* makes heart beat animation available */
  useEffect( () => {
    if( animateFav !== 'fav-icon' ){
      setTimeout( () => {
        setState( s => ({
          ...s,
          animateFav: 'fav-icon'
        }))
      },1000);
    }
  },[animateFav])

  /* hide Toaster */
  useEffect( () => {
    if( toasterClass !== 'toaster animate__animated animate__fadeOutUp' ){
      setTimeout( () => {
        setState( s => ({
          ...s,
          toasterClass: 'toaster animate__animated animate__fadeOutUp'
        }))
      },2000);
    }
  },[toasterClass])

  /* Add a favorite Store to the list of Favorite Stores */
  const addFavorite = (title,lat,lng) => {
    const founded = favorites.find( fav =>  fav.title === title );
    /* Validate thas is not present in the list */
    if( !founded ){
      const fav = {title:title, lat:lat , lng:lng };
      setState({
        ...state,
        favorites: [...favorites, fav],
        animateFav: 'fav-icon animate__heartBeat',
        toasterText: `${title} added to Favorite list`,
        toasterClass: 'toaster animate__animated animate__fadeInDown'
      })

      /* Saves in the localStore for remember the favoriteStores of the user */
      const favoriteStoreList = window.localStorage.getItem('favoriteStoreList');
      let favoriteStoresArray = [];
      /* Validate if the localstorage has property  */
      if( favoriteStoreList !== null ){
          favoriteStoresArray = JSON.parse(favoriteStoreList);
      }
      favoriteStoresArray.push( fav );
      window.localStorage.setItem('favoriteStoreList', JSON.stringify( favoriteStoresArray ) );

    }else{
      setState({
        ...state,
        animateFav: 'fav-icon animate__heartBeat',
        toasterText: `${title} is actually in Favorite list`,
        toasterClass: 'toaster animate__animated animate__fadeInDown'

      })
    }
  
  }

  const removeFavorite = (title) => {
    const favs = favorites.filter( fav => { return fav.title !== title } )
    setState({
      ...state,
      favorites: favs
    })
    window.localStorage.setItem('favoriteStoreList', JSON.stringify( favs ) );

  }

  /** Open or close Favorite Stores section */
  const toggleListFavorite = () =>{
    setState({
      ...state,
      openFavorites: !openFavorites,
      renderFavList: true
    })
  }


  return (
    <div className="your-component">
      <h1> Put your solution here!</h1>

      <div className="map-wrapper">
        <CustomMap 
          addFavorite={addFavorite} 
          markerList={markerList} 
          center={center}
        />
        <div className={toasterClass}> {toasterText} </div>  
        {
          !!favorites && (
            <div className={animateFav} onClick={toggleListFavorite}>
              <FontAwesomeIcon icon={faStar} />
            </div>
          )
        }
        { renderFavList && (
          <FavList 
            favorites={favorites}
            removeFavorite={removeFavorite} 
            toggleListFavorite={toggleListFavorite}
            css={ openFavorites ? 'fav-list animate__animated  animate__backInRight': 'fav-list animate__animated  animate__backOutRight' }
          />
        )

        }
      </div>
    </div>
  )
}
