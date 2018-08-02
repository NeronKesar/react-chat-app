import React, { PureComponent } from 'react';
import { MessageList, Input } from 'react-chat-elements';
import { messages } from './testMessages';
import './style.css';
import '../../common/chatElementsStyle.css';

class Chat extends PureComponent {
  state = {
    text: '',
    messages: [],
  };

  componentDidMount() {
    this.setState({ messages });
  }

  handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      this.handleSend();
    }
  };

  handleChange = ({ target: { value: text } }) => {
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
      this.setState({ messages, text: '' });
    }
  };

  render() {
    return (
      <div className="chat__root">

        <MessageList
          className="MessageList"
          lockable={true}
          toBottomHeight={'100%'}
          dataSource={this.state.messages}
        />

        <div className="chat__input-container">

          <input
            className="chat__input"
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Type here..."
          />

          <div className="chat__button-container">
            <button
              className="chat__button"
              onClick={this.handleSend}
            >
              Send
            </button>
          </div>

        </div>

      </div>
    )
  }
}

export default Chat;
