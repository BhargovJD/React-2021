class Friend extends React.Component{

static defaultProps ={
name:'Anonymous'
}
    render(){
        const {name} = this.props;
        return(
        <div>
            <h1>{name}</h1>

        </div>
        );
    }
}