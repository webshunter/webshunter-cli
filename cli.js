#!/usr/bin/env node
const [,,...args] = process.argv;
const fs = require('fs');
const path = require('path');
const DIR = __dirname;
const { render, renderFile } = require('template-file');
const {package} = require('./command/package');
const {consoleColor} = require('./command/color');

let [command, arg1, arg2, ...arg3] = args

if(command){
    command === 'package' ? (function(){
        consoleColor(`\n`);
        consoleColor(`WEBSHUNTER PACKAGE LIST\n`, 'yellow');
        consoleColor(`berikut merupakan daftar package yang tersedia di webshunter mulai dari npm dan composer.\n`);
        package.map(function (r, i) {
            return Object.keys(r).map(function (s) {
                consoleColor(' || '+s,'green',null, r[s] );
            })
        });
        consoleColor(`\n`);
        return true;
    })() 
    : null;
}else{
    consoleColor(`\n`);
    consoleColor(`WEBSHUNTER`, 'yellow');
    consoleColor(` berikut command yang tersedia di webshunter :`);
    consoleColor(` 1) package`,'green',null,'berisi list package yang tersedia');
    consoleColor(`\n`);
}