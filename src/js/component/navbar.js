import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";
import theKuoterLogo from "./theKuoterLogo.png";
import * as jsPDF from "jspdf";
import * as html2canvas from "html2canvas";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const savePhoto = () => {
		const input = document.getElementById("capture");
		html2canvas(input).then(canvas => {
			const imgData = canvas.toDataURL("image/png");
			const pdf = new jsPDF("p", "px", "a4");
			var width = pdf.internal.pageSize.getWidth();
			var height = pdf.internal.pageSize.getHeight();
			pdf.addImage(imgData, "JPEG", 0, 0, width, height);
			pdf.save("test.pdf");
		});
	};

	function refreshPage() {
		window.location.reload(false);
	}

	return (
		<>
			<nav className="navbar navbar-expand-lg py-0 navbar-light bg-light">
				<div className="col">
					<img
						src={theKuoterLogo}
						width="10"
						lenght="10"
						alt=""
						className="d-inline-block align-middle mr-3"
					/>
				</div>

				<div className="row mx-3 d-flex justify-content-around">
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item mx-2 active">
								<Link to="/">
									<a className="nav-link" href="#">
										<span onClick={refreshPage}>Home</span>
									</a>
								</Link>
							</li>
							<li className="nav-item mx-2 active">
								<Link to="/">
									<a className="nav-link" href="#">
										<span onClick={() => savePhoto()}>Save Quote</span>
									</a>
								</Link>
							</li>

							{/* <li className="nav-item mx-2 active">
								<Link to="/">
									<a className="nav-link" href="#" />
									<span onClick={() => savePhoto()}>Save Quote</span>
								</Link>
							</li> */}

							<li className="nav-item mx-2 dropdown">
								<a className="nav-link dropdown-toggle">Info</a>

								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<Link to="/about/faq">
										<a className="dropdown-item" href="#">
											{"About"}
										</a>
									</Link>
									<Link to="/about/contact">
										<a className="dropdown-item" href="#">
											{"Contact"}
										</a>
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
				{/* <div className="button">
					<button onClick={() => savePhoto()}>Save Quote</button>
				</div> */}

				<div>
					<a className="fb-ic" href="https://www.facebook.com/">
						<i className="fab fa-facebook-f fa-lg white-text mr-md-3 mr-2 fa-1x"> </i>
					</a>

					<a className="ins-ic" href="https://www.instagram.com/">
						<i className="fab fa-instagram fa-lg white-text mr-md-3 mr-2 fa-1x"> </i>
					</a>
				</div>
			</nav>
		</>
	);
};
