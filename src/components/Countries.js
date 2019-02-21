import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectCountry from './SelectCountry';
import { Container, Row, Col } from 'reactstrap';

class Countries extends Component {
  render() {
    const { selectedCountries, onCountriesChanged } = this.props;
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <SelectCountry
              selectedCountries={selectedCountries}
              onCountriesChanged={onCountriesChanged}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

Countries.propTypes = {
  selectedCountries: PropTypes.array,
  onCountriesChanged: PropTypes.func
};

export default Countries;
