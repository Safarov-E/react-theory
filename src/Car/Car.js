import React from 'react';

/* function Car() {
	return (
		<div> This is car component </div>
	)
} Аналогичный код*/ 

/* const Car = () => {
	return (
		<div> This is car component </div>
	)
} Аналогичный код*/

/* const Car = () =>  (
	<div> 
		This is car component 
	</div>
) Аналогичный код*/

export default () => (
	<div> 
		<p>This is car component</p>
		<p>Numbers: <strong>{Math.round(Math.random()*100)} </strong></p>
	</div>
)