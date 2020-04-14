const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			randomQuote: [],
			randomImage: []
		},
		actions: {
			updateRandomQuote: () => {
				fetch("https://type.fit/api/quotes")
					.then(resp => resp.json())
					.then(data => {
						setStore({ randomQuote: data });
					});
			},
			updateRandomImage: () => {
				fetch("https://picsum.photos/v2/list")
					.then(resp => resp.json())
					.then(data => {
						setStore({ randomImage: data });
					});
			}
		}
	};
};

export default getState;
