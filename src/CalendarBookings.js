import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

import bookingsOverTime from './bookings_over_time.json';


class CalendarBookings extends Component {
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
        title: 'Society Room Bookings at UCL',
        // hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        // vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        // legend: 'none',
      },
      rows: bookingsOverTime.rows.map((row) => {
        return [new Date(row[0]), row[1]];
      }),
      columns: [
        {
          type: 'date',
          label: 'Date',
        },
        {
          type: 'number',
          label: 'people',
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        chartType="Calendar"
        rows={this.state.rows}
        columns={this.state.columns}
        options={this.state.options}
        graph_id="Calendar"
        width="100%"
        height="400px"
        chartEvents={this.chartEvents}
        chartPackages={['corechart', 'calendar']}
      />
    );
  }
}

export default CalendarBookings;
