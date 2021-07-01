const { test, expect } = require("@jest/globals");
const exp = require("constants");
const { getDiffieHellman } = require("crypto");
const { getMaxListeners } = require("process");
const Intern = require("../lib/Intern");



test('Should return an object', ()=>{
    const mary = new Intern()
    expect(typeof(mary)).toBe("object")
    });


test("Should return a school",()=>{
    const school = "Lincoln"
    const mary = new Intern("Mary","10","mary@gmail.com",school)
    expect(mary.getSchool()).toBe(school)
    });

    test("Should return role",()=>{
        const mary = new Intern
        expect(mary.getRole()).toBe("Intern")
    });