class CatFactLibrary{
    constructor() {
        this.facts = ""
    }
    async fetchFacts(limit) {
        try {
            this.facts = await this.retrieveFacts(limit);
            return this.facts;
        } catch (error) {
            throw error;
        }
    }

    async retrieveFacts(limit) {
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