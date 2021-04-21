import React from 'react'
import {Card, CardTitle, Button, CardText}  from 'reactstrap';
import {connect} from 'react-redux';
import {deleteUser} from './redux/UserAction'

const UserCard = props => {

const {name, desc, id} = props.user

const deleteHandler = () =>{
    props.delete(id)
}

return (
    <div>
        <Card body className="text-center mb-2">
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{desc}</CardText>
          <Button outline color="danger" onClick={deleteHandler}>Delete</Button>
        </Card>
      </div>
    )
}

const mapDispatchToProps =(dispatch)=>{
    return {
        delete: (id)=> dispatch(deleteUser(id))
    }
}

export default connect(null, mapDispatchToProps)(UserCard)
