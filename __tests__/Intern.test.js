const { TestScheduler } = require('@jest/core');

const Intern = require('../lib/Intern');

const testName = 'Suzie';
const testRole = 'intern';
const testId = Number(27)
const testEmail = 'suzie@company.com';
const testSchool = 'University of Texas'

test('get intern name', () => {
    const intern = new Intern(testName)

    expect(intern.getName()).toEqual(expect.any(String))
})

test('get intern role', () => {
    const intern = new Intern(testRole)

    expect(intern.getRole()).toEqual(expect.any(String))
})

test('get intern id', () => {
    const intern = new Intern(testId)

    expect(intern.getId()).toEqual(expect.any(Number))
})

test('get intern email', () => {
    const intern = new Intern(testEmail)

    expect(intern.getEmail()).toEqual(expect.any(String))
})

test('get intern school', () => {
    const intern = new Intern(testSchool);

    expect(intern.getSchool()).toEqual(expect.any(String));
})