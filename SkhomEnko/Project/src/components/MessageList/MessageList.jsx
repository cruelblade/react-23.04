import React from 'react';
import PropTypes from 'prop-types';
// dayjs
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ru from 'dayjs/locale/ru';
import localizedFormat from 'dayjs/plugin/localizedFormat';
// my imports
import Message from '../MessageItem';
// style
import './MessageList.css';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale(
  window.navigator.userLanguage === 'ru-RU' || window.navigator.language === 'ru-RU'
    ? ru
    : 'en',
); // меняем локаль moment на русскую).

class MessageList extends React.PureComponent {
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' }); // скроллинг вниз
  };

  render() {
    const { messages, user } = this.props;
    return (
      <div className="message-field">
        <div className="message-container">
          {!messages.length && (
            <>
              <center>
                <br />
                Нет сообщений для отображения. Напишите что-нибудь.
              </center>
            </>
          )}
          {messages.map((msg, index) => {
            const key = index;
            return (
              <Message
                key={key}
                data={{
                  ...msg,
                  showTimestamp: !!(
                    index === 0 || msg.timestamp - messages[index - 1].timestamp > 1800000
                  ),
                  isMine: msg.author === `${user.name} ${user.lastName}`,
                }}
              />
            );
          })}

          <div
            style={{ float: 'left', clear: 'both' }}
            ref={el => {
              this.messagesEnd = el;
            }}
          />
        </div>
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      message: PropTypes.string,
      timestamp: PropTypes.number,
    }),
  ).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
};

export default MessageList;
