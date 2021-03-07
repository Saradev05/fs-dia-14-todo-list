import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function TaskLine(props) {
	return (
		<li className="list-group-item">
			{props.task}
			<span
				className="btn"
				onClick={() => props.deleteTask(props.taskIndex)}>
				{" "}
				x
			</span>
		</li>
	);
}

TaskLine.propTypes = {
	taskIndex: PropTypes.number,
	task: PropTypes.string,
	deleteTask: PropTypes.func
};
