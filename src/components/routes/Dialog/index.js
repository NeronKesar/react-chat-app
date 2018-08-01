import React, { PureComponent } from 'react';
import { MessageList, Input, Button } from 'react-chat-elements';
import { messages } from './testMessages';
import './style.css';
import '../../common/chatElementsStyle.css';

class Dialog extends PureComponent {
  state = {
    text: '',
    messages: [],
  };

  componentDidMount() {
    this.setState({ messages });
  }

  handleInputRef = ref => this.input = ref;

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
      this.setState({ messages });
      this.input.clear();
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

        <div>
          <Input
            ref={this.handleInputRef}
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
