import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css'

class Header extends Component {

  render() {
    const { cid } = this.props;
    return (
      <div className="header-container">
        <h1 className="header-name">{`ChatRoom ${cid}`}</h1>
      </div>
    );
  }
}

Header.propTypes = {
    cid: PropTypes.number.isRequired,
};

export default Header;