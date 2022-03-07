const { builtinModules } = require('module');
const { hashGenerator } = require('./hashgenerator');

function rainbowTable(input) {
    const table = {}
    input.forEach(element => {
        table[hashGenerator(element)] = element;
    });
    console.log(table)
    return table;
}

module.exports = { rainbowTable };