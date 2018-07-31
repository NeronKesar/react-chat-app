import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import '../datePickerStyle.css';
import './style.css'

class DatePickerField extends Component {

  handleChange = date => {
    this.props.input.onChange(moment(date).format('DD.MM.YYYY'));
  };

  render() {
    const {
      input,
      meta: { touched, error }
    } = this.props;

    const errorText = touched && error && <div className="DatePickerFieldErrorText">{error}</div>;

    return (
      <div className="DatePickerFieldRoot">

        <DatePicker
          {...input}
          className="DatePickerFieldInput"
          showYearDropdown
          scrollableYearDropdown
          showMonthDropdown
          scrollableMonthYearDropdown
          dateFormat="DD.MM.YYYY"
          selected={input.value ? moment(input.value, 'DD.MM.YYYY') : null}
          onChange={this.handleChange}
        />

        {errorText}

      </div>
    )
  }
}

export default DatePickerField;
