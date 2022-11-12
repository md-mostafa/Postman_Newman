const newman = require('newman');


newman.run({
    collection: './src/collection/Simple Book API.postman_collection.json',
    reporters: ['htmlextra', 'cli'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './report/testReport.html',
        }
    }
});