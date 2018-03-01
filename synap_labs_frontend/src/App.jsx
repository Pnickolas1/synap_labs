import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as messagesAPI from './utils/messagesApi'


class App extends Component {


  state = {
    messages: []
  }

  componentDidMount(){
    messagesAPI.getAll().then((messages) => {
      this.setState({ messages : messages })
    })
  }



  render() {
    return (
      <div className="App">
        <ListContacts messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
