var generatePassword = require('password-generator');

module.exports.run = (query) => {
    return generatePassword(query.length ? query.length : 12);
}
