import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  const [month, setMonth] = useState(0)
  const [expenses, setExpenses] = useState([])
  
  const handleInput = (event) =>{
    let selectedMonth = event.target.value
    setMonth(selectedMonth)
  }

  useEffect(() => {
    async function fetchData(){
      let result = await fetchExpenses(month)
      setExpenses(result)
    }
    fetchData()
  }, [month])
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
    ` <select name='month' onChange={handleInput}>
        <option value='month'>Select a month</option>
        {months.map((month, index) => <option key={index} value={`${index}`}>{month}</option>)}
      </select>

      <div>
        {expenses.map(expense => (
          <p>{expense.item} {expense.date} {expense.amount}</p>
        ))}
      </div>




      </div>
    </div>
  )
}
