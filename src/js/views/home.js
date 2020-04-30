import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ImageCard } from "../component/imagecard";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container-fluid bg-warning">
				<div className="col d-flex justify-content-around">
					<div className="btn btn-success" onClick={() => actions.generateInspirationalPair()}>
						{"inspo"}
					</div>
					<div className="btn btn-success" onClick={() => actions.generateSpiritualPair()}>
						{"spirito"}
					</div>
				</div>
				<div className="col-xs-6 col-md-6 col-lg-6 mx-auto my-auto bg-info my-5 py-5">
					<ImageCard />
				</div>
				<div className="col d-flex justify-content-around">
					<div className="btn btn-success" onClick={() => actions.generateFitnessPair()}>
						{"fitno"}
					</div>
					<div className="btn btn-success" onClick={() => actions.generateRandomPair()}>
						{"rando"}
					</div>
				</div>
				<br />
			</div>
		</>
	);
};
