const CatFactLibrary = require('../libraries/catFactLibrary');

const catFactLibrary = new CatFactLibrary();

const fetchCatFacts = async (limit) => {
    try {
        // fetch the cat facts using the catFactLibrary instance 
        const facts = await catFactLibrary.fetchFacts(limit);
        // return the facts 
        return facts.data;
    } catch (error) {
        // error handling
        console.error(error);
        throw error;
    }
};

module.exports = { fetchCatFacts };