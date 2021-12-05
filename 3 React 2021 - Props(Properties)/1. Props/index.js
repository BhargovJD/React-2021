class App extends React.Component{
    render(){
        return (
            <div>
                <Hello to="Ringo" from="Paul" num={1} data={[1,2,3,4]} isMale={true} bangs={4}/>

                <Hello to="Cher" from="John" bangs={2} img="dp.jpg"/>
            </div>


            )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))