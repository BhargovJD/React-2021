import React from 'react'

export default function Transaction(props) {
    return (
        <div>
            <li>
                    {props.transaction.text} <span>${Math.abs(props.transaction.amount)}</span>  <button type="submit" class="btn btn-danger">X</button>
                </li>
        </div>
    )
}
