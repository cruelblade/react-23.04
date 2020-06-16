import React from 'react';
import { List, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IChatListProps } from '../../interfaces';
import { State } from '../../store/reducers/reducerTypes';
import { deleteChat } from '../../store/actions/chatsActions';
import styles from './styles.module.scss';

export default function ChatList({ items }: IChatListProps) {
  const blinkingIds = useSelector((store: State) => store.chatlist.blinkingIds);
  const history = useHistory();
  const dispatch = useDispatch();

  const switchChat = (chatId: string) => () => {
    history.push(`/chats/${chatId}`);
  };

  const handleDelete = (chatId: string) => () => {
    const isConfirmed = confirm('Remove chat?');

    if (isConfirmed) {
      dispatch(deleteChat(chatId));

      setTimeout(() => history.push('/chats/'), 300);
    }
  };

  return (
    <List
      className={styles.chatList}
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <List.Item
          className={styles.chatListItem}
          onClick={switchChat(String(item.id))}
          onDoubleClick={handleDelete(String(item.id))}
        >
          <List.Item.Meta
            avatar={<Avatar src="https://source.unsplash.com/random/300x300" />}
            title={item.title}
            description={blinkingIds.includes(String(item.id)) ? '[NEW ROBOT MSG]' : item.description}
          />
        </List.Item>
      )}
    />
  );
}
