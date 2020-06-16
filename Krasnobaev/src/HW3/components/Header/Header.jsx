import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

class Header extends Component {

  render() {
    const { name } = this.props;
    return (
        <h1 className="header">{`${name}`}</h1>
    );
  }
}

Header.defaultProps = {
    name: "React JS",
};

Header.propTypes = {
    name: PropTypes.string,
};

export default Header;