import { Component } from "react";
import UserCard from "./UserCard";
import {connect} from 'react-redux'
import AddUser from "./AddUser";

class App extends Component{
  render(){
    return (
      <div className="container mt-4">
        {
          this.props.localState.users.map( (user) =>{
            return <UserCard  key={user.id} user ={user}/>
          })
        }

        <hr/>
        <AddUser />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    localState: state
  }
}

export default connect(mapStateToProps)(App);
