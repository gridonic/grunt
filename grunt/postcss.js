const autoprefixer = require('autoprefixer')();
const cssnano = require('cssnano')();
const cssstats = require('cssstats')();
const statsReporter = require('postcss-stats-reporter')();

const src = '<%= assets.css %>/*.css';

module.exports = {
    dev: {
        src,
        options: {
            map: {
                inline: false
            },
            processors: [
                autoprefixer
            ]
        }
    },
    prod: {
        src,
        options: {
            processors: [
                autoprefixer,
                cssnano,
                cssstats,
                statsReporter
            ]
        }
    }
};
