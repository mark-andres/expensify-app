import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper, expense;

beforeEach(() => {
    expense = expenses[2]
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage 
            expense={expense} 
            startEditExpense={startEditExpense} 
            startRemoveExpense={startRemoveExpense} 
            history={history} 
        />
    )
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense)
    expect(history.push).toHaveBeenLastCalledWith('/dashboard')
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense)
})

test('should handle onClick', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/dashboard')
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expense)
})