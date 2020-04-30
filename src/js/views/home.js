import React, { useState, useEffect, useContext } from "react";
import fitness from "../../img/fitness.jpg";
import spiritual from "../../img/spiritual.jpg";
import random from "../../img/random.jpg";
import inspirational from "../../img/inspirational.jpg";
import "../../styles/home.scss";
import { ImageCard } from "../component/imagecard";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container-fluid bg-custom">
				<div className="col d-flex justify-content-around">
					<div className="img-thumb" onClick={() => actions.generateInspirationalPair()}>
						<img src={inspirational} />
					</div>
					<div className="img-thumb" onClick={() => actions.generateSpiritualPair()}>
						<img src={spiritual} />
					</div>
				</div>
				<div className="col-xs-6 col-md-6 col-lg-6 mx-auto my-auto  bg-alert-custom my-0 py-6">
					<ImageCard />
				</div>
				<div className="col d-flex justify-content-around">
					<div className="img-thumb" onClick={() => actions.generateFitnessPair()}>
						<img src={fitness} />
					</div>
					<div className="img-thumb" onClick={() => actions.generateRandomPair()}>
						<img src={random} />
					</div>
				</div>
				<br />
			</div>
		</>
	);
};
