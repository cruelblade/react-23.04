import React, { PureComponent } from 'react';
import { Typography } from '@material-ui/core';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px'
  }
}

class EmptyPage extends PureComponent {
  render() {

    return (
      <div style={styles.wrapper}>
        <Typography component="h1" variant="h2" color="error">Ошибка 404</Typography>
        <Typography component="h2" variant="h6" color="textSecondary">К сожалению, запрашиваемая вами страница не найдена! :|</Typography>
      </div>
    );
  }
};

export default EmptyPage;
