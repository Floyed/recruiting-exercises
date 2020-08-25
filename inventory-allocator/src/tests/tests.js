var assert = require('assert');
let index = require('../src/index');
let data1 = require('./data/data1');
let data2 = require('./data/data2');
let data3 = require('./data/data3');
let data4 = require('./data/data4');
let data5 = require('./data/data5');
let data6 = require('./data/data6');


describe('Data 1', function () {
    it('should be equal to the result in data1.js', function () {
        let response = index.calculate(data1.data);
        assert.deepEqual(response, data1.result);
    });
});

describe('Data 2', function () {
    it('should be equal to the result in data2.js', function () {
        let response = index.calculate(data2.data);
        assert.deepEqual(response, data2.result);
    });
});

describe('Data 3', function () {
    it('Empty array in result check', function () {
        let response = index.calculate(data3.data);
        assert.deepEqual(response, data3.result);
    });
});

describe('Happy Case, exact inventory match!*', function () {
    it('Must have the exact inventory', function () {
        let response = index.calculate(data4.data);
        assert.deepEqual(response, data4.result);
    });
});

describe('Not enough inventory -> no allocations!', function () {
    it('Must not have any allocations', function () {
        let response = index.calculate(data5.data);
        assert.deepEqual(response, data5.result);
    });
});

describe('Should split an item across warehouses if that is the only way to completely ship an item', function () {
    it('Must split the allocations', function () {
        let response = index.calculate(data6.data);
        assert.deepEqual(response, data6.result);
    });
});