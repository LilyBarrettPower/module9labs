
const catFactService = require('../services/catFactService');

const getFacts = async (limit, res) => {
    try {
        const facts = await catFactService.fetchCatFacts(limit);
        res.send({ result: 200, data: facts });
    } catch (error) {
        res.send({ result: 500, error: error.message });
    }
};

module.exports = { getFacts}