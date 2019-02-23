import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import presetCountries from '../utils/presetCountries';

class Presets extends Component {
  render() {
    const { toggleCountries } = this.props;
    const buttons = presetCountries.map(({ id, title, values }) => (
      <Button
        key={title}
        size="sm"
        className="m-2"
        color="primary"
        onClick={() => toggleCountries(values)}
      >
        {title}
      </Button>
    ));
    return (
      <Fragment>
        <p className="presetButtons">{buttons}</p>
      </Fragment>
    );
  }
}

Presets.propTypes = {
  toggleCountries: PropTypes.func
};

export default Presets;
