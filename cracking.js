const { read } = require('fs');
const { rainbowTable } = require('./rainbowTable');

cl = ["CSE103", "CSE106", "CSE110", "CSE200", "CSE209", "CSE207", "CSE251", "CSE246", "CSE302", "CSE325", "CSE345", "CSE347", "CSE360", "CSE405", "CSE407", "CSE487", "CSE495"]

const hash = "6da96dec2995ce9f2756f1ceb4f883b3e957f56fb5a649a6e3c02586207939be"; //input the desired hash

function crack(input) {
    const table = rainbowTable(input);
    if (table[hash]) {
        console.log(table[hash]);
    } else {
        console.error("Hash not found");
    }
}

crack(cl);