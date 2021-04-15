const { TestScheduler, TestWatcher } = require('@jest/core')
const Employee = require('../lib/Employee.js')

test('creating employee object', () => {
    const employee = new Employee('Lacey');

    expect(employee.name).toBe('Lacey');
    expect(employee.id).toEqual(expect.any(Number));
    //expect(employee.email).toBeString()
    expect(employee.role).toEqual(expect.stringContaining(employee.role.toString()))
})

test('get employee name', () => {
    const employee = new Employee('Susan')

    expect(employee.getName()).toHaveProperty('name');

})

test('get role', () => {
    const employee = new Employee('Susan')

    expect(employee.getRole()).toHaveProperty('role')
})