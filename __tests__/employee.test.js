// const { TestScheduler, TestWatcher } = require('@jest/core');
// const { test, expect, jest } = require('@jest/globals');
// const { expect } = require('@jest/globals');

const Employee = require('../lib/Employee');

jest.mock('../lib/Employee');
console.log(new Employee());;

test('creating employee object', () => {
    const employee = new Employee('Lacey');

    expect(employee.name).toEqual(expect.stringContaining(employee.name.toString()));
    expect(employee.role).toEqual(expect.stringContaining(employee.role.toString()));
    expect(employee.id).toEqual(expect.any(Number));
});

test('get employee name', () => {
    const employee = new Employee('Lacey');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('get employee role', () => {
    const employee = new Employee('Lacey')
    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role.toString()));
});

test('get employee id', () => {
    const employee = new Employee('Lacey');
    expect(employee.getID()).toEqual(expect.any(Number));
});