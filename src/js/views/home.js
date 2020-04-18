import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ImageCard } from "../component/imagecard";

export const Home = () => (
	<>
		<div className="container-fluid bg-warning">
			<div className="col-xs-6 col-md-6 col-lg-6 mx-auto my-auto bg-info my-5 py-5">
				<ImageCard />
			</div>
		</div>
		<br />
	</>
);
