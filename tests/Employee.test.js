const { test, expect } = require("@jest/globals");
const exp = require("constants");
const { getDiffieHellman } = require("crypto");
const { getMaxListeners } = require("process");
const Employee = require("../lib/Employee");

test('Should return an object', ()=>{
    const bob = new Employee()
    expect(typeof(bob)).toBe("object")
    });


test("Shoud return a name", () =>{
    const name = "Mary"
    const mary = new Employee(name)
    expect(mary.name).toBe(name)
});

test("Should return an id", () =>{
    const id = 10
    const mary = new Employee("Mary",id)
    expect(mary.id).toBe(id)
});

test("Should return an email",()=>{
    const email = "cocoder555@gmail.com"
    const mary = new Employee("Mary","10",email)
    expect(mary.email).toBe(email)
})

test("Should return a name",()=>{
    const name = "Mary"
    const mary = new Employee(name)
    expect(mary.getName()).toBe(name)
});

test("Should return an id",()=>{
    const id = 10
    const mary= new Employee("Mary",id)
    expect(mary.getID()).toBe(id)
});

test("Should return an email",()=>{
    const email ="cocoder555@gmail.com"
    const mary = new Employee("Mary","10",email)
    expect(mary.getEmail()).toBe(email)
})

