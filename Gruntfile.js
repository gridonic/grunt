module.exports = function init(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            src: '.',
            dest: './public',
            get assets() {
                const self = this;

                return {
                    toString() { return `${self.dest}/assets`; },
                    get css() { return `${this}/css`; },
                    get js() { return `${this}/js`; },
                    get images() { return `${this}/images`; },
                    get fonts() { return `${this}/fonts`; }
                }
            }
        },
        jitGrunt: {
            staticMappings: {
                // enable below if you use one of our foundation(s)
                sass: './grunt/@gridonic/sass.js',
                js: './grunt/@gridonic/js.js'
            }
        }
    });
};
