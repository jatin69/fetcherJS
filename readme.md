# Fetcher-js

Javascript Version of [fetcher](https://github.com/jatin69/fetcher) made to improve upon concurrency.

### todo

- Concurrency is the MAJOR goal here
    - [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) is the way to go.
- a way to fetch the URL with options, (fetch, request-promise)
- find a html parser, similar to beautifulsoup (jsdom, x-ray, ?)
- a in-memory database for when the data gets too large, (lokijs)

## Specifics

- what happens is image isn't downloaded with result.
- simply download all results, add images to correct places & you are done.

