import React from 'react';
import { Layout as AntLayout } from 'antd';
import Header from '../../components/Header';
import styles from './styles.module.scss';

const { Header: AntHeader, Footer: AntFooter } = AntLayout;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AntLayout className={styles.layout}>
      <AntHeader className={styles.layoutHeader}>
        <Header />
      </AntHeader>
      <AntLayout>{children}</AntLayout>
      <AntFooter className={styles.layoutFooter}>&copy; 2020 Fuchsoria</AntFooter>
    </AntLayout>
  );
}
