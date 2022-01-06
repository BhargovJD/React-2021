import React,{useLayoutEffect, useEffect, useRef} from 'react'

export default function UseLayoutEffect() {
    const inpuRef = useRef();

    useLayoutEffect(()=>{
        console.log(inpuRef.current.value);
    },[]);

    useEffect(()=>{
        inpuRef.current.value = "Bhargov"
    },[]);

    return (
        <div>
            <input ref={inpuRef} value="BJD"></input>
        </div>
    )
}
