'use strict';
const fs = require('fs-extra');

const parser = require('./parser');

function run() {
    const elfPath = process.argv[2];
    if (!elfPath || !fs.existsSync(elfPath)) {
        console.error(`err path of elf file: ${elfPath}`);
        return;
    }
    const buffer = fs.readFileSync(elfPath);
    if (!parser.isELF(buffer)) {
        console.warn(`not elf file: ${elfPath}`);
        return;
    }

    const is32 = parser.is32(buffer);
    const isa = parser.getISA(buffer);
    console.log(`parse elf file: ${elfPath} , is32: ${is32}, isa: ${isa}`);
}

run();
