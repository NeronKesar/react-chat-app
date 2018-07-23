import React, { Component } from 'react';
import { MessageList, Input, Button } from 'react-chat-elements';
import { messages } from './testMessages';
import './style.css';
import '../../common/chatElementsStyle.css';

class Dialog extends Component {
  state = {
    text: '',
    messages: messages,
  };

  handleRef = ref => this.input = ref;

  handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      this.handleSend();
    }
  };

  handleChange = ({ target: { value: text} }) => {
    this.setState({ text })
  };

  handleSend = () => {
    let messages = this.state.messages.concat({
      position: 'right',
      type: 'text',
      text: this.state.text,
      date: new Date()
    });

    if (this.state.text.length > 0) {
      this.setState({ messages });
      this.input.clear();
    }
  };

  render() {
    return (
      <div className="DialogRoot">

        <MessageList
          className="MessageList"
          lockable={true}
          toBottomHeight={300}
          dataSource={this.state.messages}
        />

        <div>
          <Input
            ref={this.handleRef}
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Type here..."
            rightButtons={
              <Button
                color='white'
                backgroundColor='black'
                text='Send'
                onClick={this.handleSend}
              />
            }
          />
        </div>

      </div>
    )
  }
}

export default Dialog;
