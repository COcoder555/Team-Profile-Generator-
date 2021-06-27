const { test, expect } = require("@jest/globals");
const exp = require("constants");
const { getDiffieHellman } = require("crypto");
const { getMaxListeners } = require("process");
const Manager = require("../lib/Manager");


test('Should return an object', ()=>{
    const bob = new Manager()
    expect(typeof(bob)).toBe("object")
    });

    test("Shoud return a office number", () =>{
        const phone = "970-555-555"
        const number = new Manager(phone)
        expect(number.phone).toBe(phone)
    });