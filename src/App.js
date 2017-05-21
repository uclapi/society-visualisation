import React, { Component } from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';

import './App.css';

import CalendarBookings from './CalendarBookings';
import BookingsBySociety from './BookingsBySociety';


class App extends Component {
  render() {
    return (
      <div>
        <CalendarBookings />
        <BookingsBySociety />
        <GitHubForkRibbon
          href="//github.com/uclapi/society-visualisation"
          target="_blank"
          position="right"
        >
          Fork me on GitHub
        </GitHubForkRibbon>
      </div>
    );
  }
}

export default App;
