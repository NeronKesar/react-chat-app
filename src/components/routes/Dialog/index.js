import React, { Component } from 'react';
import { MessageList, Input, Button } from 'react-chat-elements';
import { messages } from './testMessages';
import './style.css';
import 'react-chat-elements/dist/main.css';

class Dialog extends Component {
  render() {
    return (
      <div className="DialogRoot">

        <MessageList
          className="MessageList"
          lockable={true}
          toBottomHeight={300}
          dataSource={messages}
        />

        <div>
          <Input
            className="DialogInput"
            placeholder="Type here..."
            rightButtons={
              <Button
                color='white'
                backgroundColor='black'
                text='Send'
              />
            }
          />
        </div>

      </div>
    )
  }
}

export default Dialog;
