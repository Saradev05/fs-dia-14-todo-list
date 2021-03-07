import React from "react";
import { useState } from "react";
//include images into your bundle
import { ItemsLeft } from "./itemsLeft.js";
import TaskLine from "./taskLine.js";

//create your first component
export function Home() {
	const [tareas, setTareas] = useState([]);
	const [tarea, setTarea] = useState("");

	function inputTask() {
		if (tarea != "") {
			let allTasks = tareas;
			allTasks.push(tarea);
			setTareas(allTasks);
		}
		setTarea("");
	}

	function deleteTask(taskIndex) {
		let allTasks = [...tareas];
		allTasks.splice(taskIndex, 1);
		console.log(allTasks);
		setTareas(allTasks);
	}

	// const toDolist = () =>
	return (
		<div className="container  mt-5">
			<div className="card">
				<div>
					<h1 className="text-center">todos</h1>
				</div>
				<div>
					<ul className="list-group m-5">
						<input
							className="list-group-item"
							type="text"
							placeholder="añadir tarea"
							value={tarea}
							onChange={event => {
								setTarea(event.target.value);
							}}></input>
						<button onClick={() => inputTask()}>añadir</button>
						{tareas.map((tarea, i) => {
							return (
								<TaskLine
									key={i}
									task={tarea}
									taskIndex={i}
									deleteTask={index => deleteTask(index)}
								/>
							);
						})}
						<ItemsLeft itemsCount={tareas.length} />
					</ul>
				</div>
			</div>
		</div>
	);
}
