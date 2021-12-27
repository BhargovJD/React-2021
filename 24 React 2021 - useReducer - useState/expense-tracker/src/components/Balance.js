import React from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {
    const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h4 class="text-warning">Your balance: $0.00</h4>
            <hr/>
        </div>

    )
}
