import React, {useState} from 'react'

export default function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);



    return (
        <div>
            <h5>Add transaction</h5>
            <form>
  <div class="mb-3">

    <label class="form-label">Text</label>
    <input value={text} onChange={(e)=>setText(e.target.value)} type="text" class="form-control"  />

    <label class="form-label">Amount</label>
    <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" class="form-control"  />

  </div>

  <button type="submit" class="btn btn-success">Add transaction</button>
</form>
        </div>
    )
}
