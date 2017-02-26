var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var baseUrl = "https://swapi.co/api";
var util = require("util");

describe('Sample Test Suit', function() {
    it('Pass Test', function(done) {
        request.get({ url: baseUrl + '/people/1/' },
            function(error, response, body) {
            		var bodyObj = JSON.parse(body);
            		expect(bodyObj.name).to.equal("Luke Skywalker");
            		expect(bodyObj.hair_color).to.equal("blond");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
    // Hair colour changed from blond to black
     it('Fail Test', function(done) {
        request.get({ url: baseUrl + '/people/1/' },
            function(error, response, body) {
            		var bodyObj = JSON.parse(body);
            		expect(bodyObj.name).to.equal("Luke Skywalker");
            		expect(bodyObj.hair_color).to.equal("black");
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
});
