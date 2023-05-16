import { Component } from "react";



class Profil extends Component {
    constructor() {
        super();
        this.state = { fullname:'Hamza' ,bio:'student',imgsrc:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' ,profission:'student' ,count:0};
    }
    test=()=>{return this.setState({count:this.state.count+1})}
  componentDidMount(){
    setInterval(this.test,2000)}
    render() {
        return (
            <div>
            <img src={this.state.imgsrc} alt="404"/>
                <p>{this.state.fullname}</p>
                <p>{this.state.bio}</p>
                
               <p> {this.state.profission}</p>
               <span>{this.state.count}</span>
            </div>
        );
    }
}

export default Profil;