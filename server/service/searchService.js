"use strict";
let rp = require("request-promise");
let SearchService = (function () {
  function SearchService() {
  }

  SearchService.prototype.makeSearchRequest = function (searchQuery) {
    let options = {
      method: 'POST',
      uri: 'http://10.182.114.26:8081/nlp-backend/search',
      body: {
        searchQuery: searchQuery
      },
      json: true // Automatically stringifies the body to JSON
    };
    console.log('Making request to: ', options.uri);

    return rp(options)
      .then(function (parsedBody) {
        return parsedBody;
      })
      .catch(function (err) {
        console.error('Error making search request: ', err);
      });
  };
  return SearchService;
}());
exports.SearchService = SearchService;
