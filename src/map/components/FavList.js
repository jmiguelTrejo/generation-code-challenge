import React from 'react'
import PropTypes from 'prop-types'
import { FavItem } from './FavItem'

export const FavList = ({
    favorites,
    removeFavorite,
    toggleListFavorite,
    css
}) => {

    console.log( favorites );

    return (
        <div className={css}>
            <button 
                onClick={toggleListFavorite}
                className="btn-close"
            > 
                X 
            </button>
            <h1> My Favorite Stores </h1>
            { !!favorites && 
                favorites.map( fav => {
                    return <FavItem 
                        key={fav.title} 
                        item={fav} 
                        removeFavorite={removeFavorite} 
                    />
                } 
            )}
        </div>
    )
}
/** Proptypes for the correct functionality */
FavList.propTypes = {
    favorites: PropTypes.array.isRequired,
    removeFavorite: PropTypes.func.isRequired,
    toggleListFavorite: PropTypes.func.isRequired
}



