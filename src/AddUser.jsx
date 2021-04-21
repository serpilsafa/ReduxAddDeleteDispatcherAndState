import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Form, Input, CardTitle, FormGroup, Label, Button} from 'reactstrap'
import ProtoType from 'prop-types';
import {addUser} from './redux/UserAction'


class AddUser extends Component{
  state={
    name: '',
    desc: ''

  }
  onAddHandler = () => {
    let id = this.props.localState.idx
    let user = {id: id, name: this.state.name, desc: this.state.desc}
    this.setState({user: user})

    this.props.add(user)
  }

  onChangeHandler =(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render(){
    return (
      <Form>
        <CardTitle tag="h5" style={{ color: 'red' }}>Add New User</CardTitle>
      
            <FormGroup>
              <Label for="name">Please enter your name</Label>
              <Input type="name" name="name" id="name" placeholder="Name" onChange={this.onChangeHandler} />
            </FormGroup>
            <FormGroup>
              <Label for="desc">Please enter description</Label>
              <Input type="name" name="desc" id="desc" placeholder="Description"  onChange={this.onChangeHandler}/>
            </FormGroup>

            <Button outline block color="success" onClick={this.onAddHandler}> Add User</Button>
      </Form>
  )
  }
prototype ={
    user:{
      name: ProtoType.string.isRequired,
      desc: ProtoType.string.isRequired
    }
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    add : (user) => dispatch(addUser(user))
  }
}

const mapStateToProps = (state) =>{
  return{
    localState: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
