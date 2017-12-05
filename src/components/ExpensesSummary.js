import React from 'react'
import { connect } from 'react-redux'
import selectExpensesTotal from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpensesSummary = (props) => (
    <p>
        Viewing {props.count} expenses totalling {numeral(props.total / 100).format('$0,0.00')}
    </p>
)

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        count: expenses.length,
        total: selectExpensesTotal(expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)