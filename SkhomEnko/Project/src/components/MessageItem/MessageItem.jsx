import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import dayjs from 'dayjs';
import './MessageItem.css';
import useInterval from '../../utils/hooks/useInterval';

const MessageItem = ({ data }) => {
  const { text, author, timestamp, isMine, showTimestamp } = data;

  const [fromTimestamp, setFromTimestamp] = useState(dayjs(timestamp).fromNow());
  const formatedTimestamp = dayjs(timestamp).format('llll');

  useInterval(() => {
    if (fromTimestamp !== dayjs(timestamp).fromNow())
      setFromTimestamp(dayjs(timestamp).fromNow());
  }, 2000);

  return (
    <div className={cx('message', { mine: isMine })}>
      {showTimestamp && <div className="timestamp">{formatedTimestamp}</div>}

      <div className="bubble-container">
        <div className="bubble" title={formatedTimestamp}>
          <b>{author}</b>
          <span className="time">{fromTimestamp}</span>
          <br />
          {text}
        </div>
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  data: PropTypes.shape({
    // id прилетает, но в самом (данном) компоненте он не задействован, используется только снаружи для итерирования
    // id: PropTypes.number,
    author: PropTypes.string,
    text: PropTypes.string,
    showTimestamp: PropTypes.bool,
    timestamp: PropTypes.number,
    isMine: PropTypes.bool,
  }).isRequired,
};

export default MessageItem;
