
import React from 'react'
import './Card.sass'
import { Link } from 'react-router-dom'

const Card = ( { item } ) => {

  return (
    <div className="card">
        <img src={ item.ThumbnailURL } alt="placeholder" />
        <h2 className='card-title'>{ item.Title }</h2>
        <p className='card-subtitle'>{ item.Location }</p>
        <p className='rooms'> Bedrooms { item.Bedrooms } | { item.Bathrooms } baths</p>
        <p className='price'>${item["Sale Price"]}</p>
        <Link to={ `/detail/${ item.Id }` } >View Detail</Link>
    </div>
  )
}

export default Card