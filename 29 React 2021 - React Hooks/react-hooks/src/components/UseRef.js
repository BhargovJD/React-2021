import React, {useRef} from 'react'

export default function UseRef() {

    const inputRef = useRef(null);

    const onClick=()=>{
        inputRef.current.value="";
    }

    return (
        <div>
            <input type="text" placeholder="Type something..." ref={inputRef}></input>
            <button onClick={onClick}>Click</button>
        </div>
    )
}
