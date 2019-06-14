import React from 'react';
class SearchBar extends React.Component{
    
    state = {
        lable:'Enter search term',
        term:''
    }
    onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.onSearchSubmit(this.state.term)
    }
    render(){
        return(<div>
            <form onSubmit={this.onFormSubmit}>
                <label style={{paddingRight:'10px'}}>{this.state.lable}</label>
                <input 
                    type='text' 
                    value={this.state.term} 
                    onChange={(e)=>{this.setState({
                        term:e.target.value
                    })}}
                />
                <button type='submit'>Search</button>
            </form>
        </div>)
    }
}

export default SearchBar;