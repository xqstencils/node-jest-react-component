import React from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
  static propTypes = {
    message: PropTypes.string
  };

  constructor(pros) {
    super(pros);
  }

  render() {
    return (
      <div className="hello">
        Hello { this.props.message }
      </div>
    );
  }
}

export default HelloWorld;
