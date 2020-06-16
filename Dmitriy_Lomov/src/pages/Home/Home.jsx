import React, { PureComponent } from 'react';
import { Typography } from '@material-ui/core'

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px'
  }
}

class Home extends PureComponent {
  render() {

    return (
      <div style={styles.wrapper}>
        <Typography component="h1" variant="h2" color="primary">Добро пожаловать!</Typography>
        <Typography component="h2" variant="h6" color="textSecondary">Эмулятор чата в рамках обучения v.1.0.42</Typography>
      </div>
    );
  }
};

export default Home;
