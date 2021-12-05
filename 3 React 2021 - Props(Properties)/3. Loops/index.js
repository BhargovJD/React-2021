class App extends React.Component{
    render(){
        return (
            <div>
                <Friend name="Sarah" hobbies={['Piano','Singing']} />
                <Friend name="Jack" hobbies={['Riding','Gaming']} />
            </div>


            )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))