import React from 'react'

const Filter = ({filter, rangeValue, setRangeValue}) => {
    const submitHandler = (e) => {
        e.preventDefault();
        filter(e);
      };
  return (
    <form onSubmit={submitHandler}>
          <label>Bedrooms</label>
          <select name="Bedrooms">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label>Bathrooms</label>
          <select name="Bathrooms">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label>Parking</label>
          <select name="Parking">
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

        <div className="range-content">

          <label>Price Range: ${ rangeValue }</label>
          <input type="range" 
                    defaultValue={1000000}
                  name="Sale Price" 
                  min="100000" 
                  max="1000000" 
                  onChange={(e) => setRangeValue(e.target.value)}
                  step="100000" />
        </div>
          
          <button type="submit" className="btn">
            Search
          </button>
        </form>
  )
}

export default Filter