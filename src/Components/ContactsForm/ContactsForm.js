import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactsForm.module.css';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.TaskEditor}>
        <label id={uuidv4()} className={s.TaskEditor_label}>
          <input
            className={s.TaskEditor_input}
            id={uuidv4()}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label id={uuidv4()} className={s.TaskEditor_label}>
          <input
            className={s.TaskEditor_input}
            id={uuidv4()}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>
        <button className={s.TaskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactsForm.propTypes = {
  onAddContact: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactsForm;
