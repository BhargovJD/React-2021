import React,{useReducer} from 'react'

export default function UseReducer() {

    const reducer = (state, action)=>{
        switch(action.type){
            case "INCREMENT":
                return {
                    count:state.count+1, showText:state.showText
                };
            case "toggleText":
                return {
                    count:state.count, showText:!state.showText
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer,{count:0, showText:true});

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>{
                dispatch({type:"INCREMENT"});
                dispatch({type:"toggleText"});
                }}>Click here</button>

            {state.showText && <h1>This is text</h1> }
        </div>
    )
}