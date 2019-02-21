import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Presets from './Presets';
import LazyHero from 'react-lazy-hero';
import CO2Logo from '../images/co2.jpg';

class Hero extends Component {
  render() {
    const { toggleCountries } = this.props;
    return (
      <div>
        <LazyHero
          imageSrc={CO2Logo}
          color="#002147"
          opacity="0.9"
          parallaxOffset="100"
          transitionDuration="800"
        >
          <h1 className="display-1">
            World CO<sup>2</sup> Emissions
          </h1>
          <p className="lead">
            Search carbon dioxide (CO<sup>2</sup>) emissions by location.
          </p>
          <p className="lead">
            Data provided by{' '}
            <a href="https://datahelpdesk.worldbank.org/knowledgebase/articles/889392-about-this-api-documentation">
              The World Bank API
            </a>
            .
          </p>
          <Presets toggleCountries={toggleCountries} />
        </LazyHero>
      </div>
    );
  }
}

Hero.propTypes = {
  toggleCountries: PropTypes.func
};

export default Hero;
