const eventResolver = require('./event');
const authResolver = require('./auth');

module.exports = {
 ...eventResolver,
 ...authResolver
};