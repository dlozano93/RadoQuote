import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const ImageCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(Context);

	return (
		<>
			{!store.randomImage ? (
				<div />
			) : (
				<div className="card mx-auto" style={{ width: "400px" }}>
					<img src={store.randomImage} className="card-img-top" alt="..." />
					<div className="card-body text-center">
						<h5 className="card-text">{'"' + store.randomQuote.text + '"'}</h5>

						<a className="card-text">{"-" + store.randomQuote.author}</a>
					</div>
				</div>
			)}
		</>
	);
};
ImageCard.propTypes = {
	quote: PropTypes.quote,
	author: PropTypes.author,
	image: PropTypes.image
};
ImageCard.defaultProps = {};
