const path = require('path');

module.exports = {
    // Your other configurations...
    resolve: {
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/"),
            "url": require.resolve("url/"),
            "assert": require.resolve("assert/")
        }
    },
    // Other configurations...
};
