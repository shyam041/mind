import React from 'react';
import UsersList from './UsersList';
import SearchBar from './SearchBar';
import UserDetail from './UserDetail';
class App extends React.Component {
  state = {
    users:[],
    selectedUser:null,
  };
  
  onSearchSubmit = async (term)=>{
    let response = await fetch(`https://api.github.com/search/users?q=${term}`);
    let JSONResponse  = await (response.json());
    //console.log(JSONResponse);
    this.setState({users:JSONResponse.items});
    // fetch(`https://api.github.com/search/users?q=${term}`)
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(myJson) {
    //   console.log(myJson);
    // });
  }
  getUserDetails = (uesrId)=>{
    const user = this.state.users.find((user)=>{
      return user.id === uesrId;
    });
    this.setState((prevState,props) => {
      if((prevState.selectedUser===null)||(prevState.selectedUser.id!==uesrId)){        
        return {selectedUser: user};
      }
    },()=>{
      console.log('in callback');
    });
    //this.setState({selectedUser: user});
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  // shouldComponentUpdate(){
  //   return true;
  // }
  render(){
    console.log('render')
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <UsersList users={this.state.users} getUserDetails={this.getUserDetails}/>
        <UserDetail user={this.state.selectedUser}/>
      </div>
    );
  }
}

export default App;
