import React from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

/** Functional component that render a Favorite Store */
export const FavItem = ({
    item,
    removeFavorite
}) => {
    return (
        <div  className="item" >
        <FontAwesomeIcon
            onClick={() => {removeFavorite(item.title)}}
            icon={faTrash}
        />
        <p>{item.title}</p>
    
    </div>

    )
}
/** Proptypes for the correct functionality */
FavItem.propTypes = {
    item: PropTypes.object.isRequired,
    removeFavorite: PropTypes.func.isRequired
}
