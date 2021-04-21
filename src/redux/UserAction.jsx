
export const deleteUser =(id)=>{
    return {
        type: 'DELETE_USER',
        value: id
    }
}

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        value: user
    }
}

export const updateUser = (user) =>{
    return {
        type: 'UPDATE_USER',
        value: user
    }
}
