import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, FormControl, InputLabel, OutlinedInput, Button } from '@material-ui/core/';
import { Save } from '@material-ui/icons/';
import { getCurrentUser } from '../../selectors/chatsSelectors';
import { updateProfile } from '../../actions/chatsActions';

class Profile extends Component {
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onSave = () => {
    const { updateProfile: doSave } = this.props;
    const { name, lastName } = this.state;
    doSave({ name, lastName });
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { name, lastName } = this.props.user;
    return (
      <Box height={500} p={3}>
        <h2>Редактирование профиля</h2>
        <FormControl variant="outlined">
          <InputLabel htmlFor="name" color="primary">
            Имя
          </InputLabel>
          <OutlinedInput
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
            label="Имя"
            color="primary"
          />
        </FormControl>
        <FormControl variant="outlined" my={2}>
          <InputLabel htmlFor="lastName" color="primary">
            Фамилия
          </InputLabel>
          <OutlinedInput
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={this.handleChange}
            label="Фамилия"
            color="primary"
          />
        </FormControl>
        <Box my={2}>
          <Button variant="contained" startIcon={<Save />} onClick={this.onSave}>
            Сохранить
          </Button>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = store => ({
  user: getCurrentUser(store),
});

const mapDispatchToProps = {
  updateProfile,
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  updateProfile: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
