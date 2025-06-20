
// MOCHA AND CHAI
import { expect, assert} from 'chai';
import { add, sub } from '../src/app.js'; 
import {suite,test} from 'mocha'

// BDD - by default mocha supports Behaviour Driven Developement
describe('example1', () => {
    it('add(2,3) should return 5', () => {
        expect(add(2,3)).to.be.equal(5);
    });

    it('sub(5,3) should return 2', () => {
        expect(sub(5,3)).to.be.equal(2);
    });
});

//TDD - test Driven development

 //const {suite, test} = require('mocha')
suite('suite1',() =>{
    test('add(2,3) should return 5', ()=>{
        expect(add(2,3)).to.be.equal(5);
    })
})

const foo = 'bar';
const beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');