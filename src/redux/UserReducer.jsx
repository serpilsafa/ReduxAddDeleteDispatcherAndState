
const initilState = {
    users: [
        {id:1, name: 'Shopia', desc:'She is a doctor'},
        {id:2, name: 'Jhone', desc:'He is a teacher'},
        {id:3, name: 'Andrew', desc:'He is a home officer'}
      ],
      idx:4
}

const UserReducer = (state=initilState, action) => {
    switch(action.type){
        case 'DELETE_USER':
            let tUser = state.users.filter(user => user.id !== action.value)
            return {
                ...state, users: tUser
            };
        case 'ADD_USER': 
            return {
                users: [...state.users,  action.value],
                idx: state.idx + 1
            };
        default:
            return state;
    }
}

export default UserReducer