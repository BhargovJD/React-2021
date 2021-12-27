import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

export default function TransactionList() {
    const {transactions} = useContext(GlobalContext);
    console.log(transactions);
    return (
        <div>
            <h5>History</h5>

            <ul>

                {transactions.map(transaction=>(<Transaction transaction={transaction} key={transaction.id}/>))}



            </ul>

            <hr/>
        </div>
    )
}
