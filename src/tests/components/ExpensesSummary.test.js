import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/expenses-total'

test('should render ExpensesSummary correctly with 0 expenses', () => {
    const wrapper = shallow(<ExpensesSummary count={0} total={0} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpensesSummary correctly with expenses', () => {
    const wrapper = shallow(<ExpensesSummary count={expenses.length} total={selectExpensesTotal(expenses)} />)
    expect(wrapper).toMatchSnapshot()
})