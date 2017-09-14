const cmds = {

    // js:dev -> npm run build
    get dev() { return this._build(); },

    // js:prod -> npm run build:prod
    get prod() { return this._build('prod'); },

    // js:watch -> npm run watch
    get watch() { return this._run('watch'); },

    // js:test -> npm run test
    get test() { return this._run('test'); },

    // change into js directory, install deps, run npm command…
    _run(cmd) { return [ '(cd <%= src %>/js', 'npm i', `npm run ${cmd})`].join('&&'); },

    // build task
    _build(env) {
        return [
            this._run('build' + (env === 'prod' ? ':prod' : '')),

            // make sure destination exists
            'mkdir -pv <%= assets.js %>',

            // copy build to destination
            'cp -vr <%= src %>/js/build/* <%= assets.js %>'
        ].join('&&');
    }
};

module.exports = (grunt) => {
    const task = {
        name: 'js',
        description: 'Bridge task to the build tools of our JavaScript foundation.',
        fn(cmd = 'dev') {
            grunt.log.writeln('👍  Using scripts from JavaScript foundation…')
            grunt.config.merge({ shell: { js: { command: cmds[cmd] } } });
            grunt.task.run('shell:js');
        }
    };

    grunt.registerTask(task.name, task.description, task.fn);
};
