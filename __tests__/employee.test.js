const { TestScheduler, TestWatcher } = require('@jest/core')
const Employee = require('../lib/Employee.js')

test('creating employee object', () => {
    const employee = new Employee('Lacey');

    expect(employee.name).toBe('Lacey');
    expect(employee.id).toEqual(expect.any(Number));
    //expect(employee.email).toBeString()
    expect(employee.role).toBe('Employee')
})