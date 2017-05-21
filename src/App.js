import React, { Component } from 'react';
import './App.css';
import CalendarBookings from './CalendarBookings';
import BookingsBySociety from './BookingsBySociety';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <CalendarBookings />
        <BookingsBySociety />
      </div>
    );
  }
}

export default App;
