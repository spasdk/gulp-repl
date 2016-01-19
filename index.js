/**
 * Read-eval-print loop task.
 * The module exports a readline instance.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var Plugin = require('spa-gulp/lib/plugin'),
    plugin = new Plugin({name: 'repl', entry: 'serve', context: module});


// create tasks for profiles
plugin.profiles.forEach(function ( profile ) {
    var repl;

    // main entry task
    profile.task(plugin.entry, function ( done ) {
        repl = require('gulp-repl');

        // no unnecessary prompts
        repl.setPrompt(profile.data.prompt);

        // report
        profile.notify({
            info: 'serve '.green + 'read-eval-print loop'.bold,
            title: plugin.entry,
            message: 'read-eval-print loop'
        });

        // stop task invoke
        repl.on('close', done);

        // Ctrl+C was pressed
        repl.on('SIGINT', process.exit);
    });

    profile.task('stop', function () {
        if ( repl ) {
            // report
            profile.notify({
                info: 'stop '.green + 'read-eval-print loop'.bold,
                title: 'stop',
                message: 'read-eval-print loop'
            });

            repl.close();
        }
    });
});


// public
module.exports = plugin;
