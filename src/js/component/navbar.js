import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";
import theKuoterLogo from "./theKuoterLogo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

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
			</nav>
		</>
	);
};
