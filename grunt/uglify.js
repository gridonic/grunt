module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: '<%= assets.js %>',
            src: '**/*.js',
            dest: '<%= assets.js %>'
        }]
    }
};
