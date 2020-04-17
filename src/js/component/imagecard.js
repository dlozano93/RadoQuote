import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Imagecard = () => {
	return (
		<>
			<div className="container d-flex justify-content-center">
				<img src={rigoImage} />
			</div>
		</>
	);
};
