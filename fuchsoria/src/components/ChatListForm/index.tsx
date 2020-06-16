import React, { useState, FormEvent } from 'react';
import { Input, Button } from 'antd';
import styles from './styles.module.scss';

export default function ChatListForm({ handleCreate }: { handleCreate: (title: string) => void }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    handleCreate(title);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input type="text" placeholder="Введите название" onChange={(event) => setTitle(event.target.value)} />
      <Button htmlType="submit">Создать чат</Button>
    </form>
  );
}
