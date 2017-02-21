'use strict';

var expect = require('chai').expect;
var numFormatter = require('../index');

describe('#numFormatter', function() {
    it('Should convert single digits', function() {
        var result = numFormatter(1);
        expect(result).to.equal('1');
    });

    it('Should convert double digits', function() {
        var result = numFormatter(12);
        expect(result).to.equal('12');
    });

    it('Should convert triple digits', function() {
        var result = numFormatter(123);
        expect(result).to.equal('123');
    });

    it('Should convert four digits', function() {
        var result = numFormatter(1234);
        expect(result).to.equal('1,234');
    });

    it('Should convert five digits', function() {
        var result = numFormatter(12345);
        expect(result).to.equal('12,345');
    });

    it('Should convert six digits', function() {
        var result = numFormatter(123456);
        expect(result).to.equal('123,456');
    });

    it('Should convert seven digits', function() {
        var result = numFormatter(1234567);
        expect(result).to.equal('1,234,567');
    });

    it('Should convert eight digits', function() {
        var result = numFormatter(12345678);
        expect(result).to.equal('12,345,678');
    });

    it('Should convert nine digits', function() {
        var result = numFormatter(123456789);
        expect(result).to.equal('123,456,789');
    });
});
