/* Copyright (C) 2022 WHITE HACKERS
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD BOT
*/

const Config = require('../config');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./DATABASE/Languages/' + Config.LANG + '.json')) {
    console.log(chalk.green.bold('Loading ' + Config.LANG + ' language...'));
    var json = JSON.parse(fs.readFileSync('./DATABASE/Languages/' + Config.LANG + '.json'));
} else {
    console.log(chalk.red.bold('You entered an invalid language. English language was chosen.'));
    var json = JSON.parse(fs.readFileSync('./DATABASE/Languages/EN.json'));
}

function getString(file) { return json['STRINGS'][file]; }

module.exports = {
    language: json,
    getString: getString
}
