class Friend extends React.Component{

    static defaultProps ={
    name:'Anonymous'
    }
        render(){
            const {name} = this.props;
            return(
            <div className="Friend">
                <h1 style={{backgroundColor:'purple',color:'white'}}>{name}</h1>

            </div>
            );
        }
    }