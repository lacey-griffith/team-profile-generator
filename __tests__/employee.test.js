const { TestScheduler } = require('@jest/core');

const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Suzie')

    expect(employee.name).toEqual(expect.stringContaining(employee.name.toString()))
    expect(employee.id).toEqual(expect.any(Number));
})

test('get employee name', () => {
    const employee = new Employee('Suzie')

    expect(employee.getName()).toBe('Suzie')
})

test('get employee role', () => {
    const employee = new Employee('Suzie')

    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role.toString()))
})

test('get employee id', () => {
    const employee = new Employee('Suzie')

    expect(employee.getID()).toEqual(expect.any(Number))
})