import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { IMessageListProps } from '../../interfaces';
import Message from '../Message';
import { deleteMessage } from '../../store/actions/chatsActions';
import styles from './styles.module.scss';

export default function MessageList({ messages, chatId }: IMessageListProps) {
  const listRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof listRef.current?.lastElementChild?.scrollIntoView === 'function') {
      listRef.current.lastElementChild.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  });

  const handleDelete = (messageId: string, chatId: string) => () => {
    const isConfirmed = confirm('Remove message?');

    if (isConfirmed) {
      dispatch(deleteMessage(messageId, chatId));
    }
  };

  return (
    <div className={styles.messageList} ref={listRef}>
      {messages.map(({ id, author, text, authorAccess }) => (
        <Message
          key={id}
          id={id}
          author={author}
          text={text}
          isSelf={authorAccess === 'self'}
          handleDelete={handleDelete(id, chatId)}
        />
      ))}
    </div>
  );
}
