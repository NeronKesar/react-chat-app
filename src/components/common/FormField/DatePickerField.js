import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { getDateLimit } from '../../../utils';
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

    const className = (touched && error) ? 'form-field__input-error' : 'form-field__input';
    const errorText = touched && error && <div className="form-field__error-text">{error}</div>;

    return (
      <div className="form-field__container">

        <DatePicker
          {...input}
          className={className}
          dateFormat="DD.MM.YYYY"
          selected={input.value ? moment(input.value, 'DD.MM.YYYY') : null}
          value={input.value ? moment(input.value, 'DD.MM.YYYY') : null}
          onChange={this.handleChange}
          minDate={getDateLimit(80)}
          maxDate={getDateLimit(12)}
          dateFormatCalendar="DD.MM.YYYY"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={80}
          showMonthDropdown
          scrollableMonthYearDropdown
          readOnly
        />

        {errorText}

      </div>
    )
  }
}

export default DatePickerField;
