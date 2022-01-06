import React,{useRef} from 'react'
import Button from './Button'

export default function Parent() {
    const buttonRef = useRef(null);

    return (
        <div>
            <button onClick={()=>{buttonRef.current.alterToggle();}}>Button from parent</button>
            <Button ref={buttonRef}/>
        </div>
    )
}
