class App extends React.Component{
    render(){
        return (
            <div>
                <Friend name="Sarah" />
                <Friend />
            </div>


            )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))