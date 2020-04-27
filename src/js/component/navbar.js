import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light content d-flex justify-content-around">
				<div className="col">
					<Link to="/">
						<a className="navbar-brand" href="#">
							{"Random Quote Generator"}
						</a>
					</Link>
				</div>

				<div className="row mx-3 d-flex justify-content-around">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item mx-2 active">
								<Link to="/">
									<a className="nav-link" href="#">
										Home <span className="sr-only bg-success">(current)</span>
									</a>
								</Link>
							</li>
							<li className="nav-item mx-2">
								<Link to="/">
									<a className="nav-link" href="#" onClick={() => actions.generateFitnessPair()}>
										Fitness Quote
									</a>
								</Link>
							</li>
							<li className="nav-item mx-2">
								<Link to="/">
									<a
										className="nav-link"
										href="#"
										onClick={() => actions.generateInspirationalPair()}>
										Inspirational Quote
									</a>
								</Link>
							</li>
							<li className="nav-item mx-2">
								<Link to="/">
									<a className="nav-link" href="#" onClick={() => actions.generateSpiritualPair()}>
										Spiritual Quote
									</a>
								</Link>
							</li>
							<li className="nav-item mx-2">
								<a className="nav-link" href="#" onClick={() => actions.generateRandomPair()}>
									Random Quote
								</a>
							</li>
							<li className="nav-item mx-2 dropdown">
								<Link to="/about">
									<a className="nav-link dropdown-toggle">About us</a>
								</Link>
								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<Link to="/about/faq">
										<a className="dropdown-item" href="#">
											{"FAQ"}
										</a>
									</Link>
									<Link to="/about/contact">
										<a className="dropdown-item" href="#">
											{"Contact Us!"}
										</a>
									</Link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
