import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Chart from './Chart';
import { fullFormat, shortFormat } from '../utils/unitFormatter';

class ChartContainer extends Component {
  filterYears(country, indicator) {
    const filteredYears = country.years.filter(year => year[indicator] > 0);
    return Object.assign({}, country, { years: filteredYears });
  }

  render() {
    const { chartData, chartHeight } = this.props;
    const validPopulationYears = chartData.map(country =>
      this.filterYears(country, 'population')
    );
    const validEmissionYears = chartData.map(country =>
      this.filterYears(country, 'emission')
    );
    const validGdpYears = chartData.map(country =>
      this.filterYears(country, 'gdp')
    );

    return (
      <Fragment>
        <Row>
          <Col>
            <div className="my-4">
              <h2>
                CO<sup>2</sup> emissions per capita
              </h2>
              <Chart
                chartData={validEmissionYears}
                chartHeight={chartHeight}
                xAxisDataKey="year"
                yAxisOrientation="left"
                lineDataKey="emission"
                unit="tonnes"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="my-4">
              <h2>Population by country</h2>
              <Chart
                chartData={validPopulationYears}
                chartHeight={chartHeight}
                xAxisDataKey="year"
                yAxisOrientation="left"
                yAxisTickFormatter={shortFormat}
                lineDataKey="population"
                tooltipFormatter={fullFormat}
                unit=""
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="my-4">
              <h2>GDP per capita</h2>
              <Chart
                chartData={validGdpYears}
                chartHeight={chartHeight}
                xAxisDataKey="year"
                yAxisOrientation="left"
                yAxisTickFormatter={shortFormat}
                lineDataKey="gdp"
                tooltipFormatter={fullFormat}
                unit="$"
              />
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

ChartContainer.propTypes = {
  chartData: PropTypes.array,
  chartHeight: PropTypes.number
};

export default ChartContainer;
