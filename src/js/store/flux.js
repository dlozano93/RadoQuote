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
			getAllFitnessQuotes: () => {
				fetch(
					"https://8080-dae0ec2d-e971-4fe6-aceb-4bbe348a1638.ws-us02.gitpod.io/wp-json/sample_api/v1/fitnessquote"
				)
					.then(resp => resp.json())
					.then(data => {
						setStore({ allFitnessQuotes: data });
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
			getAllFitnessImages: () => {
				fetch(
					"https://8080-dae0ec2d-e971-4fe6-aceb-4bbe348a1638.ws-us02.gitpod.io/wp-json/sample_api/v1/fitness"
				)
					.then(resp => resp.json())
					.then(data => {
						setStore({ allFitnessImages: data });
						console.log(data);
					});
			},
			getAllInspirationalImages: () => {
				fetch(
					"https://8080-dae0ec2d-e971-4fe6-aceb-4bbe348a1638.ws-us02.gitpod.io/wp-json/sample_api/v1/inspirational"
				)
					.then(resp => resp.json())
					.then(data => {
						setStore({ allInspirationalImages: data });
						console.log(data[0].image.sizes);
					});
			},
			getAllSpiritualImages: () => {
				fetch(
					"https://8080-dae0ec2d-e971-4fe6-aceb-4bbe348a1638.ws-us02.gitpod.io/wp-json/sample_api/v1/spiritual"
				)
					.then(resp => resp.json())
					.then(data => {
						setStore({ allSpiritualImages: data });
						console.log(data);
					});
			},
			generateRandomPair: () => {
				const store = getStore();
				setStore({
					randomImage: store.allImages[Math.floor(Math.random() * store.allImages.length)].download_url
				});
				setStore({ randomQuote: store.allQuotes[Math.floor(Math.random() * store.allQuotes.length)] });
			},
			generateSpiritualPair: () => {
				const store = getStore();
				setStore({
					randomImage:
						store.allSpiritualImages[Math.floor(Math.random() * store.allSpiritualImages.length)].image
							.sizes.large
				});
				setStore({ randomQuote: store.allQuotes[Math.floor(Math.random() * store.allQuotes.length)] });
			},
			generateInspirationalPair: () => {
				const store = getStore();
				setStore({
					randomImage:
						store.allInspirationalImages[Math.floor(Math.random() * store.allInspirationalImages.length)]
							.image.sizes.large
				});
				setStore({ randomQuote: store.allQuotes[Math.floor(Math.random() * store.allQuotes.length)] });
			},
			generateFitnessPair: () => {
				const store = getStore();
				setStore({
					randomImage:
						store.allFitnessImages[Math.floor(Math.random() * store.allFitnessImages.length)].image.sizes
							.large
				});

				setStore({
					randomQuote: store.allFitnessQuotes[Math.floor(Math.random() * store.allFitnessQuotes.length)]
				});
			}
		}
	};
};

export default getState;
