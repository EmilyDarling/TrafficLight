
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("blue");
	

	return (
		<div className="bg-black ms-5 pt-1 rounded" style={{width:300, height:725}}>
			<div onClick={() =>  setColor("red") } className="text-center rounded-circle mb-3 ms-5 mt-5" style={{width:200, height:200, backgroundColor: color == "red" ? "red" : "#381b1b"}}></div>
			<div onClick={() =>  setColor("yellow")} className="text-center rounded-circle mb-3 ms-5" style={{width:200, height:200, backgroundColor: color == "yellow" ? "yellow" : "#67692f"}}></div>
			<div onClick={() =>  setColor("green") } className="text-center rounded-circle ms-5" style={{width:200, height:200, backgroundColor: color == "green" ? "#2fff0d" : "#1f2b1d" }}></div> 

		
		</div>	
	
	);
};

export default TrafficLight;
