import { array } from "prop-types";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// const tasks = ["Task1", "Task2", "Task3", "Task4"]
//create your first component

const Home = () => {

	const [input, setInput] = useState("")
	const [tasks, setTasks] = useState([""])
	const handleChange = (event) =>{
		setInput(event.target.value) //Aqui estará el valor del imput, esto es una propiedad de javascript
	}
	const addInput = ()=>{
		console.log("funciona")
		setTasks(tasks.concat(input))
	}
	const deleteInput =()=>{
		setTasks([])
	}
// const borrar = (index)=>{
// 					setTasks(tasks.filter((task, id)=> id !== index)
// 				}
	return (
		<>
		<div className="text-center">
			<h1>Taks list</h1>
			<input type="text" name="" id="" onChange={handleChange}/>
			<button onClick={addInput}>Añadir</button>
			<p>El valor del input es {input} </p>
			
			{tasks.map((element, index)=>{
				

				return <p>{element}</p>
			})}
			

			<button onClick={deleteInput}>Delete</button>
		</div>
		</>
	);
};

export default Home;
