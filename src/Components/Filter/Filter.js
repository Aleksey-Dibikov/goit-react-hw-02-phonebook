import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <div>
        <h3>Find contacts by name</h3>
        <input
          className={s.TaskEditor_input}
          type="text"
          value={this.props.value}
          onChange={e => this.props.onChangeFilter(e.target.value)}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};

export default Filter;
