import React from 'react'
import { Link } from 'react-router-dom'

const PropertyDetail = ( { data }) => {
  return (
    <div className="detail">
    <div className="dtr">
      <span className="title">{data.Title}</span>
      <span className="location">{data.Location}</span>
    </div>
    <div className="dtl">
      <span className="sales">${data["Sale Price"]}</span>
      <span className="bathrooms">{data.Bathrooms} baths</span>
    </div>
    <div className="image">
      <img src={data.PictureURL} alt="" />
    </div>
    <div className="info">
      <span>
        {data.Bedrooms}
        <br />
        Bed
      </span>
      <span>
        {data.Bathrooms}
        <br /> Bath
      </span>
      <span>
        {data.Parking}
        <br /> Parking
      </span>
      <span>
        {data.Sqft}
        <br /> Sqft
      </span>
      <span>
        {data.YearBuilt}
        <br /> Year Built
      </span>
    </div>

    <div className="description">{data.Description}</div>

    <div className="back">
      <Link to="/" className="btn">
        Get Back
      </Link>
    </div>
  </div>
  )
}

export default PropertyDetail