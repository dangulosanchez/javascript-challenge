# American Express JavaScript Challenge
This application contains a framework, a caching fetch library, and a web application.

The framework contains:
* a server
* a client runtime
* an MSW mock server, to allow you to run this project without a network connection.

The application will render a very basic directory of people.

## Usage
```bash
npm i
npm start
```

## Documentation
In the development of this task, I have had to do the following:
* Create a .gitignore so node_modules and other unneeded / potentially insecure information are not uploaded to github
* Define types for People data that is received from external API
* Create cache hooks to ensure that data is loaded efficiently
## Cache
There are two JavaScript objects initialized and used for the cache. These are simply two objects that use key-value pairs to efficiently retrieve data.
* dataCache maps each URL to its fetched JSON result. Tch url to his allows for quick retreival after the initial fetch.
* promiseCache maps each URL to the promise besing used for its fetch. This allows for multiple components that may depend on it to utilize the same network request.
## Future Development
In order for us to acheive a higher level of code standards and best practices, we should implement the following:
* Unit testing for our cache functions, specifically to try edge cases
* Load testing to validate functionality with a high volume of requests
* Configure CORS to only allow expected origins

