class Match extends React.Component{
    render(){

        const {first,second} = this.props;

        let msg=``;

        if(first === second){
            msg=`Winner`;
        }
        else {
            msg=`Looser`;
        }

        return(
        <div>
            <p>{first} {second}</p>
            <p>{msg}</p>
        </div>
        );
    }
}