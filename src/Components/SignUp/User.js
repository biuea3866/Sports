import User from 'react'

// For Sign..
const User = {
    'userID': 'biuea',
    'userPW': '1111',
    'userEmail': 'aaaa@naver.com',
    'userAddress': 'Seoul',
    'userPhone': '010-0000-0001',
    'userBitrh': '940811',
    'userGender': 'Male'
}

class User extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2>User Name:</h2>
            </div>
        )
    }
}

export default User;