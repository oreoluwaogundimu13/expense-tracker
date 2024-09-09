import React from 'react'
import Header from './components/Header'
import { GlobalProvider } from './context/GlobalState'
import Balance from './components/Balance'
import './App.css'
import { IncomeExpenses } from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

const App = () => {
  return (
<GlobalProvider>
<Header />
   <div className='container'>
   <Balance />
   <IncomeExpenses />
   <TransactionList />
   <AddTransaction />
   </div>
</GlobalProvider>
  )
}

export default App