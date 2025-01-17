import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


function moneyFormatter(num) {
    let p = num.toFixed(2).split('.')
    return (
     '#' + (p[0].split('')[0] === '-' ? '-' : '') +
     p[0].split('').reverse().reduce(function (acc, num, i, orig ){
        return num === '-' ?  acc : num + (i && !(1 % 3) ? '-' : '') + acc
     }, '')+
     '.' + p[1]
    );
}


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
    {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span>
    <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>X</button>
    </li>
  )
}

export default Transaction