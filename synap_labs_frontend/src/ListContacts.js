import React, { Component } from 'react';



class ListContacts extends Component{
  constructor(props){
    super(props)
  }

  state = {
    query : ''
  }

  render(){
    let showingMessages;

    showingMessages = this.props.messages;
    console.log(showingMessages);

    return(
      <div className='list-messages'>
        <div className='list-messages-top'>
          <input 
            className='search-messages'
            type='text'
            placeholder='search messages from'
          />
        </div>


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