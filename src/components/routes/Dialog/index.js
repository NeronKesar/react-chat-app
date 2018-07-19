import React, { Component } from 'react';
import { MessageList } from 'react-chat-elements';
import './style.css';
import 'react-chat-elements/dist/main.css';

class Dialog extends Component {
  render() {
    return (
      <div className="MessageList">
        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight="100%"
          dataSource={[
            {
              position: 'right',
              type: 'text',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
              date: new Date(),
            },
            {
              position: 'right',
              type: 'text',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
              date: new Date(),
            },
            {
              position: 'right',
              type: 'text',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
              date: new Date(),
            },
          ]}
        />
      </div>
    )
  }
}

export default Dialog;
