import { writable } from "svelte/store";

export const countryDataStore = writable([]);
export const top10CountriesStore = writable([]);

fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        // Sort the data by population in descending order
        const sortedData = data
            .slice()
            .sort((a, b) => b.population - a.population);

        // Slice the sorted data to get the top 10 most populated countries
        const top10Countries = sortedData.slice(0, 10);
        const top50Countries = sortedData.slice(0, 20);

        // Set the top 10 countries in the store
        countryDataStore.set(top50Countries);
        top10CountriesStore.set(top10Countries);
    });