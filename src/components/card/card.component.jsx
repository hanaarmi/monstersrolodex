import React from 'react'

import '../card/card.styles.css'

export const Card = (props) => (
	<div className="card-container">
		<img
			alt="monster"
			// curly brace for javascript expression, backtick for including $, ${} for variable reference
			src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`}
		/>
		<h2>{props.monster.name}</h2>
		<p>{props.monster.email}</p>
	</div>
)
