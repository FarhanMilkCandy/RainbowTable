const { createHash } = require('crypto');

function hashGenerator(input) {
    const hash = createHash('sha256');
    hash.update(input);
    return hash.digest('hex');
}

module.exports = { hashGenerator };