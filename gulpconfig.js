module.exports = function() {
    var config = {
        alljs: [// pipe in all the source we'll be using
            './src/**/*.js',
            './*.js'
        ]
    };
    return config;
};
