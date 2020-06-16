import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
//import MessageField from '../MessageField';
import ChatList from '../ChatList';
import styles from './index.css';


const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
           
        <Header />
            <div className={styles.body}>
            <ChatList />
            {children}
            </div>
        </div>
    );
  };



  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  
  export default Layout;