import React, { useState, useEffect, useContext } from "react";
import fitness from "../../img/fitness.jpg";
import spiritual from "../../img/spiritual.jpg";
import random from "../../img/random.jpg";
import inspirational from "../../img/inspirational.jpg";
import "../../styles/home.scss";
import { ImageCard } from "../component/imagecard";
import { Context } from "../store/appContext";
import html2canvas from "/workspace/RandoQuote/node_modules/html2canvas/dist/html2canvas.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	// savePhoto => {
	// 	html2canvas(document.querySelector("#capture")).then(canvas => {
	// 		// document.body.appendChild(canvas);
	// 		image = canvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
	// 		console.log(image);
	// 		window.location.href = image;
	// 	});
	// };

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="col d-flex justify-content-around">
							<div className="img-thumb" onClick={() => actions.generateInspirationalPair()}>
								<img src={inspirational} />
							</div>
							<div className="img-thumb" onClick={() => actions.generateSpiritualPair()}>
								<img src={spiritual} />
							</div>
						</div>
						<div className="col d-flex justify-content-around">
							<div className="img-thumb" onClick={() => actions.generateFitnessPair()}>
								<img src={fitness} />
							</div>
							<div className="img-thumb" onClick={() => actions.generateRandomPair()}>
								<img src={random} />
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-md-6 col-lg-6 mx-auto my-auto  bg-alert-custom my-0 py-6">
						<ImageCard id="capture" />
						{/* <button onClick="savePhoto()">Save Quote</button> */}
					</div>
				</div>
			</div>
		</>
	);
};
