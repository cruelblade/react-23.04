import React from 'react';
import cn from 'classnames';
import { IMessageWithHandler } from '../../interfaces';
import styles from './styles.module.scss';

export default function Message({ author, text, isSelf, handleDelete }: IMessageWithHandler) {
  return (
    <div className={cn([styles.message, { [styles.messageSelf]: isSelf }])} onDoubleClick={handleDelete}>
      <div className={styles.messageAuthor}>{author}</div>
      {text}
    </div>
  );
}
