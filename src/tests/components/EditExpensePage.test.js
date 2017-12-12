import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper, expense;

beforeEach(() => {
    expense = expenses[2]
    editExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage 
            expense={expense} 
            editExpense={editExpense} 
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
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense)
})

test('should handle onClick', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expense)
})