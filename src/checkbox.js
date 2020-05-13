/*  Custom Checkbox Component
 *
 *  Taylor Lawrence
 *  May 12, 2020
 */

import React from 'react';

export const ExtendedCheckbox = props => (
	<React.Fragment>
		<label style = {{"display":"inline-block"}}>
			<input
				type = "checkbox"
				checked = {props.checked}
				onChange = {props.onChange}
			/>
			<span>{props.label}</span>
		</label>
	</React.Fragment>
)