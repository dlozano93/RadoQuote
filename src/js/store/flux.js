const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			randomQuote: []
		},
		actions: {
			updateRandomQuote: () => {
				fetch("https://type.fit/api/quotes")
					.then(resp => resp.json())
					.then(data => {
						console.log(data);
					});
			}
		}
	};
};

export default getState;
