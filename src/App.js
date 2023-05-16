import { Component } from "react";
import Profil from "./Components/Profil";

class App extends Component {
  constructor() {
    super();
    this.state = {isshow:true  };

  }
 
  toggleVisibility=()=>this.setState({isshow:!this.state.isshow})
  render() {
    return (
      <div>
      <button onClick={this.toggleVisibility}> Show </button>
      {this.state.isshow && <Profil/>}
      
      </div>
    );
  }
}

export default App;