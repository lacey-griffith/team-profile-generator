const { TestScheduler } = require('@jest/core');

const Employee = require('../lib/Employee');
//jest.mock('../lib/Employee');

const testName = 'Suzie';
const testRole = 'employee';
const testId = Number(27)
const testEmail = 'suzie@company.com';

test('create employee object', () => {
    const employee = new Employee(testName, testRole, testId)

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.role).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
})

test('get employee name', () => {
    const employee = new Employee(testName)

    expect(employee.getName()).toEqual(expect.any(String))
})

test('get employee role', () => {
    const employee = new Employee(testRole)

    expect(employee.getRole()).toEqual(expect.any(String))
})

test('get employee id', () => {
    const employee = new Employee(testId)

    expect(employee.getId()).toEqual(expect.any(Number))
})

test('get employee email', () => {
    const employee = new Employee(testEmail)

    expect(employee.getEmail()).toEqual(expect.any(String))
})