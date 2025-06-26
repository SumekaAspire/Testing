// const assert = require('chai').assert;
// const data = require('../src/index');
//const { isLetter } = require('./index');

import { expect, assert } from "chai";
import { isLetter, isEmail, isLength } from "../src/index.js";

// //before refactor
// describe("isLetter", function () {
//   it("should return only alphabets", function () {
//     const result = isLetter();
//     assert.match(result, /^[a-zA-Z]+$/);
//   });
// });

// describe("isEmail", function(){
//     it("validate email format", function(){
//         const result = isEmail();
//         assert.match(result, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
//     })
// })


// describe("isLength", function () {
//   it("validate word length", function () {
//     const result = isLength();
//     assert.match(result, /^([a-zA-Z0-9_-]){8,1000}$/);
   
//   });
//  });

//after refctor
describe("isLetter", function () {
  it("should return only alphabets", function () {
    assert.isTrue(isLetter("favour"));
    // assert.isTrue(isLetter("123"));
    // assert.isTrue(isLetter(" "));
    assert.isFalse(isLetter("favour123"));
  });
});

describe("isEmail", function () {
  it("validate email format", function () {
    assert.isTrue(isEmail("sumi@gmail.com"));
    assert.isTrue(isEmail("sumi@gmail.cu"));
   // assert.isTrue(isEmail("sumi@gmailcom"));
  });
});

describe("isLength", function () {
  it("validate word length", function () {
    assert.isTrue(isLength("sumigmailom"));
    assert.isTrue(isLength("w24536jjhuu"));
   
  });
});