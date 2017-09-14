const cmds = {

    // sass:dev -> npm run build
    get dev() { return this._build(); },

    // sass:prod -> npm run build:prod
    get prod() { return this._build('prod'); },

    // sass:watch -> npm run watch
    get watch() { return this._run('watch'); },

    // sass:test -> npm run test
    get test() { return this._run('test'); },

    // sass:docs -> npm run docs
    get docs() { return this._run('docs'); },

    // sass:styleguide -> npm run styleguide
    get styleguide() { return this._run('styleguide'); },

    // change into sass directory, install deps, run npm command…
    _run(cmd) { return [ '(cd <%= src %>/sass', 'npm i', `npm run ${cmd})`].join('&&'); },

    // build task
    _build(env) {
        return [
            this._run('build' + (env === 'prod' ? ':prod' : '')),

            // make sure destination exists
            'mkdir -pv <%= assets.css %>',

            // copy build to destination
            'cp -vr <%= src %>/sass/build/* <%= assets.css %>'
        ].join('&&');
    }
};

module.exports = (grunt) => {
    const task = {
        name: 'sass',
        description: 'Bridge task to the build tools of our Sass foundation.',
        fn(cmd = 'dev') {
            grunt.log.writeln('👍  Using scripts from Sass foundation…')
            grunt.config.merge({ shell: { sass: { command: cmds[cmd] } } });
            grunt.task.run('shell:sass');
        }
    };

    grunt.registerTask(task.name, task.description, task.fn);
};
