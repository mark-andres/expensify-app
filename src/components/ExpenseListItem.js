import React from 'react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt, note }) => (
    <div>
        <h3><NavLink to={`/edit/${id}`}>{description}</NavLink></h3>
        <p>
            {numeral(amount / 100).format('$0,0.00')} 
            - 
            {note} 
            - 
            {moment(createdAt).format("dddd, MMMM Do YYYY")}}
        </p>
    </div> 
)

export default ExpenseListItem