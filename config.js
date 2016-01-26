/**
 * Base configuration for repl gulp task.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var extend   = require('extend'),
    config   = require('spa-gulp/config'),
    profiles = {};


// main
profiles.default = extend(true, {}, config, {
    // indicate readiness to accept commands
    prompt: ''
});


// public
module.exports = profiles;
