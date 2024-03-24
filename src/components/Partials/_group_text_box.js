import React, { useState } from "react";
import "../Store/Store.css";

export default function GroupCreate(props) {
	const [isFocused, setIsFocused] = useState(false);
	const borderColor = isFocused ? '#0b57d0' : '#1f1f1f';

	return (
		<div className="text_box" style={{
			borderTopColor: borderColor,
			borderLeftColor: borderColor,
			borderRightColor: borderColor,
			borderBottomColor: borderColor,
			transition: 'border-color 200ms ease-in-out'
		}}>
			<div className="text_inner">
				<input
					id="new_group"
					type="text"
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
				<div className="text_string">{props.name}</div>
			</div>
		</div>
	);
};
