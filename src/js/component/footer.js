import React, { Component } from "react";

export const Footer = () => (
	<footer className="page-footer font-small cyan darken-3">
		<div className="container">
			<div className="row">
				<div className="col-md-12 py-0">
					<div className="mb-5 flex-center">
						<a className="fb-ic">
							<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-1x"> </i>
						</a>

						<a className="tw-ic">
							<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-1x"> </i>
						</a>

						<a className="gplus-ic">
							<i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-1x"> </i>
						</a>

						<a className="li-ic">
							<i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-1x"> </i>
						</a>

						<a className="ins-ic">
							<i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-1x"> </i>
						</a>

						<a className="pin-ic">
							<i className="fab fa-pinterest fa-lg white-text fa-1x"> </i>
						</a>
					</div>
				</div>
			</div>
		</div>

		<div className="footer-copyright text-center py-0">
			© 2020 Copyright:
			<span className="logo">Team Kuoter</span>
		</div>
	</footer>
);
