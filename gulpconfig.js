module.exports = function() {
    var client = './src/client/';

    var config = {
        temp: './.tmp',

        /**
         * File paths
         */
        // pipe in all the source we'll be using
        alljs: [
            './src/**/*.js',
            './*.js'
        ],

        less: client + 'styles/styles.less'
    };

    return config;
};
