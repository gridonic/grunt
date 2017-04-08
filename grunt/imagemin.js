module.exports = {
    all: {
        options: {
            optimizationLevel: 3,
            svgoPlugins: [{ removeViewBox: false }]
        },
        files: [{
            expand: true,
            cwd: '<%= assets.images %>',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: '<%= assets.images %>'
        }]
    }
};
