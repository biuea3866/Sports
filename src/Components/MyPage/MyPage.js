import React, { Component } from 'react';
import User from '../SignUp/User'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';

class MyPage extends Component{
    render(){
        return(
            <div>
                <TableRow>
                    <TableCell>{this.props.userID}</TableCell>
                    <TableCell>{this.props.userEmail}</TableCell>
                    <TableCell>{this.props.userAddress}</TableCell>
                    <TableCell>{this.props.userGender}</TableCell>
                    <TableCell>{this.props.userBitrh}</TableCell>
                    <TableCell>{this.props.userPhone}</TableCell>
                </TableRow>
            </div>
        )
    }
}

class UserInfo extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.userID}</h2>
                <p>{this.props.userEmail}</p>
                <p>{this.props.userAddress}</p>
                <p>{this.props.userPhone}</p>
                <p>{this.props.userBitrh}</p>
                <p>{this.props.userGender}</p>
            </div>
        )
    }
}
export default MyPage;