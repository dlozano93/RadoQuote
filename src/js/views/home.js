import React, { useState, useEffect, useContext } from "react";
import fitness from "../../img/fitness.jpg";
import spiritual from "../../img/spiritual.jpg";
import random from "../../img/random.jpg";
import inspirational from "../../img/inspirational.jpg";
import "../../styles/home.scss";
import { ImageCard } from "../component/imagecard";
import { Context } from "../store/appContext";
import * as jsPDF from "jspdf";
import * as html2canvas from "html2canvas";

export const Home = () => {
	const { store, actions } = useContext(Context);

	// const savePhoto = () => {
	// 	const input = document.getElementById("capture");
	// 	html2canvas(input).then(canvas => {
	// 		const imgData = canvas.toDataURL("image/png");
	// 		const pdf = new jsPDF("p", "px", "a4");
	// 		var width = pdf.internal.pageSize.getWidth();
	// 		var height = pdf.internal.pageSize.getHeight();
	// 		pdf.addImage(imgData, "JPEG", 0, 0, width, height);
	// 		pdf.save("test.pdf");
	// 	});
	// };

	return (
		<div style={{ backgroundColor: "lightSkyBlue" }}>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="col d-flex justify-content-around">
							<br />
							<br />
						</div>
						<div className="col d-flex justify-content-around" id="thumb">
							<div className="img-thumb" onClick={() => actions.generateInspirationalPair()}>
								<img src={inspirational} />
							</div>
							<div className="img-thumb" onClick={() => actions.generateSpiritualPair()}>
								<img src={spiritual} />
							</div>
						</div>
						<div className="col d-flex justify-content-around">
							<br />
						</div>

						<div className="col d-flex justify-content-around" id="thumb">
							<div className="img-thumb" onClick={() => actions.generateFitnessPair()}>
								<img src={fitness} />
							</div>
							<div className="img-thumb" onClick={() => actions.generateRandomPair()}>
								<img src={random} />
							</div>
						</div>
					</div>

					<div className="col-xs-6 col-md-6 col-lg-6 mx-auto my-auto  bg-alert-custom my-0 py-6">
						<ImageCard />
					</div>
				</div>
			</div>
		</div>
	);
};
