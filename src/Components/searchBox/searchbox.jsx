import React from 'react'

function searchbox({placeholder, handleChange}) {
    return (
        <div className="inputfield-container">
        <input
         className="input-field" 
         type="search"
         placeholder={placeholder}
         onChange={handleChange} />
         </div>
    )
}

export default searchbox
