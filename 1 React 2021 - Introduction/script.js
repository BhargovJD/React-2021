class Hello extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello form class component</h1>
            </div>
        );
    }
}

function Hello2(){
    return (
        <div>
            <h1>Hello form functional component</h1>
        </div>
    )
}

ReactDOM.render(<Hello/>, document.getElementById('root1'));

ReactDOM.render(<Hello2/>, document.getElementById('root2'));