const { TestScheduler } = require('@jest/core');

const Engineer = require('../lib/Engineer');

const testName = 'Suzie';
const testRole = 'engineer';
const testId = Number(27)
const testEmail = 'suzie@company.com';
const testGithub = 'suzie-kaboozie'

test('create engineer object', () => {
    const engineer = new Engineer(testName, testRole, testId)

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.role).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number))
})

test('get engineer name', () => {
    const engineer = new Engineer(testName)

    expect(engineer.getName()).toEqual(expect.any(String))
})

test('get engineer role', () => {
    const engineer = new Engineer(testRole)

    expect(engineer.getRole()).toEqual(expect.any(String))
})

test('get engineer id', () => {
    const engineer = new Engineer(testId)

    expect(engineer.getId()).toEqual(expect.any(Number))
})

test('get engineer email', () => {
    const engineer = new Engineer(testEmail)

    expect(engineer.getEmail()).toEqual(expect.any(String))
})

test('get engingeer github username', () => {
    const engineer = new Engineer(testGithub)

    expect(engineer.getGitHub()).toEqual(expect.any(String))
})