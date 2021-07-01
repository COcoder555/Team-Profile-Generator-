const { test, expect } = require("@jest/globals");
const exp = require("constants");
const { getDiffieHellman } = require("crypto");
const { getMaxListeners } = require("process");
const Engineer = require("../lib/Engineer");


test('Should return an object', () => {
    const mary = new Engineer()
    expect(typeof (mary)).toBe("object")
});



test('Should return a GitHub user name', () => {
    const gitHub = "cocoder"
    const mary = new Engineer("Mary", "10", "bob@gmail.com", gitHub)
    expect(mary.getGitHub()).toBe(gitHub)
});


test("Should return role", () => {
    const mary = new Engineer
    expect(mary.getRole()).toBe("Engineer")
})

