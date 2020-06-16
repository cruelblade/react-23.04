import React from 'react';
import { useDispatch } from 'react-redux';
import ProfileForm from '../../components/ProfileForm';
import { setNickName } from '../../store/actions/profileActions';
import { IUpdateProfile } from '../../interfaces';
import styles from './styles.module.scss';

export default function Profile() {
  const dispatch = useDispatch();
  const updateProfile = ({ nickName }: IUpdateProfile) => {
    if (nickName) {
      dispatch(setNickName(nickName));
    }
  };

  return (
    <div className={styles.container}>
      <ProfileForm updateProfile={updateProfile} />
    </div>
  );
}
