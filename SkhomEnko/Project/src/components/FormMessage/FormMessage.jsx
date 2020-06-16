import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FormMessage.css';
import SendIcon from '@material-ui/icons/Send';

class FormMessage extends Component {
  state = {
    text: '',
    showEmojis: false,
    emojis: [
      ...'😀😁😂🤣😃😄😅😆😉😊😋😎😍😘🥰😗😙😚🙂🤗🤩🤔🤨😐😑😶🙄😏😣😥😮🤐😯😪😫😴😌😛😜😝🤤😒😓😔😕🙃🤑😲😞😟😤😢😭😦😧😨😩🤯😬😰😱🥵🥶🤪😵😡😠🤬😷🤒🤕🤢🤮🤧😇🤠🤡🥳🥴🥺🤥🤫🤭🧐🤓😈👿👹👺💩😺😸😹😻😼😽🙀😿😾👍👎👊✊🤛🤜🤞✌🤟🤘👌👈👉👆👇☝✋🤚🖐🖖',
    ],
  };

  onChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { addNewMessage, user } = this.props;
    const { text } = this.state;
    this.setState(() => ({ text: '' }));
    addNewMessage({
      author: `${user.name} ${user.lastName}`,
      text: text === '' ? 'Пустое сообщение' : text,
      timestamp: new Date().getTime(),
    });
  };

  onEmojiListToggle = e => {
    e.preventDefault();
    this.setState(({ showEmojis }) => ({ showEmojis: !showEmojis }));
  };

  onEmojiSelect = e => {
    const emojik = e.target.innerText.slice(0, 2);
    e.preventDefault();
    this.setState(({ showEmojis, text }) => ({
      showEmojis: !showEmojis,
      text: text + emojik,
    }));
    // console.log('selected emoji:', emojik);
  };

  render() {
    const { text, showEmojis, emojis } = this.state;
    return (
      <>
        <form className="input-panel" onSubmit={this.onSubmit}>
          <textarea
            name="text"
            onChange={this.onChange}
            onKeyDown={e => {
              if (!e.shiftKey && e.key === 'Enter') this.onSubmit(e);
            }}
            value={text}
            autoFocus
          />
          <div className="emoji-selector" style={{ display: 'inline-block' }}>
            <div
              role="navigation"
              className={`emoji-list${showEmojis ? '' : ' hide'}`}
              onClick={this.onEmojiSelect}
            >
              {emojis.map(emoji => (
                <a href="\" key={`${emoji.codePointAt(0)}`}>
                  {emoji}
                </a>
              ))}
            </div>
            <button
              type="button"
              className="emoji-list-toggle"
              onClick={this.onEmojiListToggle}
            />
          </div>
          <button type="submit">
            <SendIcon />
            SEND
          </button>
        </form>
      </>
    );
  }
}

FormMessage.propTypes = {
  addNewMessage: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};

export default FormMessage;
