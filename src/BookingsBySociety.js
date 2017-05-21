import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

import totalBookingsBySociety from './total_bookings_by_society.json';


class BookingsBySociety extends Component {
  constructor(props) {
    super(props);
    this.chartEvents = [
      {
        eventName: 'select',
        callback(Chart) {
            // Returns Chart so you can access props and  the ChartWrapper object from chart.wrapper
          console.log('Selected ', Chart.chart.getSelection());
        },
      },
    ];
    this.state = {
      options: {
        title: 'Total Bookings by Society',
        hAxis: {
          title: 'Bookings',
        },
        vAxis: {
          title: 'Society',
          textStyle: {
            fontSize: 7,
          },
        },
        // legend: 'none',
      },
      rows: totalBookingsBySociety.rows,
      columns: [
        {
          type: 'string',
          label: 'Society',
        },
        {
          type: 'number',
          label: 'Bookings',
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        chartType="BarChart"
        rows={this.state.rows}
        columns={this.state.columns}
        options={this.state.options}
        graph_id="BarChart"
        width="75%"
        height="2000px"
        chartEvents={this.chartEvents}
        chartPackages={['corechart', 'bar']}
      />
    );
  }
}

export default BookingsBySociety;
