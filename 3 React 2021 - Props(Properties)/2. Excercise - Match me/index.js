class App extends React.Component{
    render(){
        return (
            <div>
                <Match first="apple" second="mango" />
                <hr/>
                <Match first="apple" second="apple" />
            </div>


            )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))