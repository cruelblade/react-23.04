import React, { useState, FormEvent } from 'react';
import { Input, Tooltip, Button } from 'antd';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { IProfileFormProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function ProfileForm({ updateProfile }: IProfileFormProps) {
  const [nickName, setNickName] = useState('');
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    updateProfile({ nickName });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input
        placeholder="Enter your new username"
        prefix={<UserOutlined className="site-form-item-icon" />}
        suffix={
          <Tooltip title="Extra information">
            <InfoCircleOutlined />
          </Tooltip>
        }
        onChange={(event) => setNickName(event.target.value)}
      />
      <Button className={styles.button} type="primary" htmlType="submit">
        Update Profile
      </Button>
    </form>
  );
}
