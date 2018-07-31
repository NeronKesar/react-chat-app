import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../datePickerStyle.css';

class DatePickerField extends Component {

  state = {
    date: moment()
  };

  handleChange = date => {
    this.setState({ date: moment(date) });
    console.log('---', this.state.date)
  };

  render() {
    const {
      placeholder,
      meta: { touched }
    } = this.props;

    return (
      <div>
        <DatePicker
          showYearDropdown
          scrollableYearDropdown
          showMonthDropdown
          scrollableMonthYearDropdown
          dateFormat="DD.MM.YYYY"
          onChange={this.handleChange}
          selected={this.state.date}
        />
      </div>
    )
  }
}

export default DatePickerField;
