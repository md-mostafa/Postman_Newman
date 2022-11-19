const newman = require('newman');

newman.run({
    collection:'./src/collection/httpbinorg API.postman_collection.json',
    reporters: ['htmlextra', 'cli'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './report/api_report.html',
             browserTitle: "My Newman report",
             title: "httpbin.org API Automation",
        
        }
    }
});