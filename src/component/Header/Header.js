import React from 'react';
import PropTypes from 'prop-types';

function Header() {
  return (<div>
    <header className="App-header">
      <h1 className="App-title">
        Welcome
      </h1>
    </header>
  </div>);
};
Header.propTypes = {
  className: PropTypes.string,
};

export default Header;

