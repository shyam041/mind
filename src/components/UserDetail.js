import React from 'react';

class UserDetails extends React.Component{
    render(){
        return(<div style={{float:'right'}}>
            <img src={this.props.user?this.props.user.avatar_url:null} alt={this.props.user?this.props.user.login:'loading'}/>
        </div>);
    }
}

export default UserDetails;