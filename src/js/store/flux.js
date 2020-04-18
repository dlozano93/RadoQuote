import { get } from "http";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			randomQuote: {},
			randomImage: "",
			allQuotes: [],
			allImages: []
		},
		actions: {
			getAllQuotes: () => {
				fetch("https://type.fit/api/quotes")
					.then(resp => resp.json())
					.then(data => {
						setStore({ allQuotes: data });
						console.log(data);
					});
			},
			getAllImages: () => {
				fetch("https://picsum.photos/v2/list")
					.then(resp => resp.json())
					.then(data => {
						setStore({ allImages: data });
						console.log(data);
					});
			},
			generateRandomPair: () => {
				const store = getStore();
				setStore({
					randomImage: store.allImages[Math.floor(Math.random() * store.allImages.length)].download_url
				});
				setStore({ randomQuote: store.allQuotes[Math.floor(Math.random() * store.allQuotes.length)] });
			}
		}
	};
};

export default getState;
