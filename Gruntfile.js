module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Tasks
    grunt.initConfig({
        jsonlint: {
            sample: {
                src: [
                    '**/*.json',
                    '!node_modules/**/*.json',
                    '!package.json'
                ]
            }
        }
    });

    grunt.registerTask('default', ['jsonlint']);
    grunt.registerTask('test', ['default']);
};