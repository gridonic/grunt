module.exports = {
    fonts: {
        expand: true,
        cwd: '<%= src %>/fonts',
        src: '**',
        dest: '<%= assets.fonts %>'
    },
    images: {
        expand: true,
        cwd: '<%= src %>/images',
        src: '**',
        dest: '<%= assets.images %>'
    }
};
