class Hello extends React.Component{
    render(){
        return (
            <div>
                <h1>By using JSX we can use HTML directly to .JS file</h1>
                <h1>{2+4}</h1>
                <hr/>

            </div>
        );
    }
}

// ......................................

function getMood(){
    const moods = ['Angry','Happy','Hungry'];

    return moods[Math.floor(Math.random()*moods.length)];
}

function Hello2(){
    return (
        <div>
            <h1>My mood is {getMood()}</h1>
            <hr/>
        </div>
    )
}

// ......................................

function getNum(){
    return Math.floor(Math.random()*10)+1;
}

class NumPicker extends React.Component{
    render(){

        const num = getNum();

        let msg =``;

        if(num===7){
            msg=
            <div>
                <h2>Congrats!</h2>
                <img src="dp.jpg" alt="" />
            </div>

        }
        else{
            msg=
            <p>Sorry... you loose!</p>
        }

        return(
            <div>
                <h1>Your number is: {num}</h1>
                <h2>{msg}</h2>
            </div>
        )

    }
}



ReactDOM.render(<Hello/>, document.getElementById('root1'));

ReactDOM.render(<Hello2/>, document.getElementById('root2'));

ReactDOM.render(<NumPicker/>, document.getElementById('root3'));