'use strict';
const constant = require('./constant');

function isELF(buffer) {
    return (buffer.readIntLE(0, 4)
        === parseInt(constant.magic_number));
}

function is32(buffer) {
    return (buffer.readIntLE(4, 1)
        === 1);
}

function getISA(buffer) {
    const ISA = constant.isa;
    for (let isa in ISA) {
        if (parseInt(ISA[isa])
            === buffer.readIntLE(parseInt('0x12'), 2)) {
            return isa;
        }
    }
    return 'unknown';
}

module.exports = {
    isELF,
    is32,
    getISA,
}