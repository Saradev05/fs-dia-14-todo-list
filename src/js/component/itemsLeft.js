import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export function ItemsLeft(props) {
	return (
		<div className="list-group-item">{props.itemsCount} items left </div>
	);
}
ItemsLeft.propTypes = {
	itemsCount: PropTypes.number
};
