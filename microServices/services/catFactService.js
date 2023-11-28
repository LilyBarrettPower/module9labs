const CatFactLibrary = require('../libraries/catFactLibrary');

const catFactLibrary = new CatFactLibrary();

const fetchCatFacts = async (limit) => {
    try {
        const facts = await catFactLibrary.fetchFacts(limit);
        return facts.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = { fetchCatFacts };