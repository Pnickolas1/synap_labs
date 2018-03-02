import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';



class ListContacts extends Component{
  constructor(props){
    super(props)
    console.log(this.props)
  }

  state = {
    query : ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render(){
    let showingMessages;
    showingMessages = this.props.messages;
    console.log(this.props)

    if(this.state.query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingMessages = this.props.messages.filter((message) => 
        match.test(message.from)
      )
    } else {
      showingMessages = this.props.messages;
    }


    return(
      <div className='list-messages'>
        <div className='list-messages-top'>
          <input 
            className='search-messages'
            type='text'
            placeholder='From:'
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>

      
        {showingMessages.length !== this.props.messages.length && (
          <div className='showing-messages'>
            <span>Showing {showingMessages.length} of {this.props.messages.length} Messages </span>
            <button onClick={this.clearQuery}> Show All </button>
          </div>
        )} 


      <ol className='message-list'>
        {showingMessages.map(message => (
          <li key={message.id} className='message-list-item'>
            <div className='message-details'>
              <p>From: {message.from}</p>
              <p>To: {message.to}</p>
              <p>Subject: {message.subject}</p>
            </div>
            <button onClick={() => {}} className='message-remove'>
              remove
            </button>
          </li>
        ))}
      </ol>

      </div>
    )
  }
}

export default ListContacts