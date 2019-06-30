import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: [],
    shows: []
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => {
        // users = JSON.parse(users);
        this.setState({ users });
      });

  }

  handleOnClick(e) {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>

        {this.state.users.length > 0 ? this.state.users.map(user =>
          <div key={user.id} onClick={this.handleOnClick.bind(this)}>
            {user.username} <br/>
          </div>
        ) : ''}

        {/* {this.state.shows.length > 0 ? this.state.shows.map(show => 
          <div key={show.id} onClick={this.handleOnClick.bind(this)}>
            {show.name}<br />
          </div>
        ) : ''} */}
      </div>
    );
  }
}

export default App;