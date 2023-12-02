// fetch the cat fact infomration from the external API
class CatFactLibrary{
    // initialise the class with an empty string for storing the fetched data 
    constructor() {
        this.facts = ""
    }
    async fetchFacts(limit) {
        // asyncronously fetch the cat fact data using teh retrieveFacts function
        try {
            this.facts = await this.retrieveFacts(limit);
            return this.facts;
        } catch (error) {
            throw error;
        }
    }

    async retrieveFacts(limit) {
        // asyncronously fetch the cat fact data from the api with the optional limit parameter 
        try {
            let apiURL = 'https://catfact.ninja/facts';
            if (limit) {
                apiURL += `?limit=${limit}`;
            }

            const response = await fetch(apiURL)

            if (!response.ok) {
                throw new Error('Fetch unsuccessful');
            }
            return await response.json();
        } catch(error) {
            throw error;
        }
    }
}

module.exports = CatFactLibrary;