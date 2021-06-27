const { test, expect } = require("@jest/globals");
const exp = require("constants");
const { getDiffieHellman } = require("crypto");
const { getMaxListeners } = require("process");
const Engineer = require("../lib/Engineer");


test('Should return an object', ()=>{
    const bob = new Engineer()
    expect(typeof(bob)).toBe("object")
    });