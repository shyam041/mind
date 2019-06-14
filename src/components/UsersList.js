import React from 'react';

class UsersList extends React.Component{
    handleOnClick =(id)=>{
        this.props.getUserDetails(id);
    }
    render(){
        return(<div>
            <ul>
                {this.props.users.map((user)=>{
                    return(
                        <li 
                            key={user.id}
                            onClick={()=>{
                                this.handleOnClick(user.id);
                            }}>
                            {user.login}
                        </li>);
                })}
            </ul>
        </div>)
    }
}

export default UsersList;