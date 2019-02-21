import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import HeroLazy from './components/HeroLazy';
import Countries from './components/Countries';
import Results from './components/Results';
import './App.css';

const localURL = 'http://localhost:4000/graphql';
const productionURL =
  'https://co2-emissions-back-kuorikoski.herokuapp.com/graphql';
const backendURL =
  process.env.NODE_ENV === 'production' ? productionURL : localURL;

const client = new ApolloClient({
  uri: backendURL
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChangedCountries = this.handleChangedCountries.bind(this);
    this.state = {
      selectedCountries: []
    };
  }

  handleChangedCountries(value) {
    this.setState({ selectedCountries: value });
  }

  render() {
    const { selectedCountries } = this.state;

    return (
      <ApolloProvider client={client}>
        <div id="app" className="text-center">
          <HeroLazy toggleCountries={this.handleChangedCountries} />
          <Countries
            selectedCountries={selectedCountries}
            onCountriesChanged={this.handleChangedCountries}
          />
          <Results selectedCountries={selectedCountries} />
          <footer className="">
            <div className="container">
              <p className="jk">
                Julius Kuorikoski
                <span className="ml-3">
                  <a href="https://github.com/Kuorikoski">
                    <i class="fab fa-github fa-2x" />
                  </a>
                </span>
              </p>
            </div>
          </footer>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
