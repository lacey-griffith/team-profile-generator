const { TestScheduler } = require('@jest/core');

const Manager = require('../lib/Manager');

const testName = 'Suzie';
const testRole = 'manager';
const testId = Number(27)
const testEmail = 'suzie@company.com';
const testOfficeNumber = Number(5121234567)

test('create manager object', () => {
    const manager = new Manager(testName, testRole, testId)

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.role).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number))
})

test('get manager name', () => {
    const manager = new Manager(testName)

    expect(manager.getName()).toEqual(expect.any(String))
})

test('get manager role', () => {
    const manager = new Manager(testRole)

    expect(manager.getRole()).toEqual(expect.any(String))
})

test('get manager id', () => {
    const manager = new Manager(testId)

    expect(manager.getId()).toEqual(expect.any(Number))
})

test('get manager email', () => {
    const manager = new Manager(testEmail)

    expect(manager.getEmail()).toEqual(expect.any(String))
})

// test('get manager office number', () => {
//     const manager = new Manager(testOfficeNumber)

//     expect(manager.getOfficeNumber()).toEqual(expect.any(Number))
// })