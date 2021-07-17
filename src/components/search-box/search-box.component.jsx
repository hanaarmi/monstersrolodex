import React from 'react'

import './search-box.styles.css'

// destructuring argument
export const SearchBox = ({ placeholder, handleChange }) => {
	return (
		<input
			className="search"
			type="search"
			placeholder={placeholder}
			onChange={handleChange}
		/>
	)
}
